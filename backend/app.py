# main.py
from fastapi import FastAPI, UploadFile, File, HTTPException
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain.document_loaders import PyPDFLoader
from typing import List
import quantdb
import os

app = FastAPI()

# Initialize OpenAI embeddings
embeddings = OpenAIEmbeddings(
    model="text-embedding-3-small",
    openai_api_key=os.getenv("OPENAI_API_KEY")
)

# Initialize QuantDB
db = quantdb.connect("pdf_vectors")

async def process_pdf(file_path: str):
    # Load PDF
    loader = PyPDFLoader(file_path)
    documents = loader.load()
    
    # Split text into chunks
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=150,
        length_function=len
    )
    chunks = text_splitter.split_documents(documents)
    
    # Generate embeddings
    for chunk in chunks:
        embedding = embeddings.embed_query(chunk.page_content)
        
        # Store in QuantDB
        db.create_table(
            "embeddings",
            data=[{
                "text": chunk.page_content,
                "vector": embedding,
                "metadata": {
                    "page": chunk.metadata.get("page", 0),
                    "source": file_path
                }
            }],
            mode="append"
        )
    
    return len(chunks)
@app.post("/upload/")
async def upload_pdfs(files: List[UploadFile] = File(...)):
    try:
        results = []
        for file in files:
            if not file.filename.endswith('.pdf'):
                raise HTTPException(status_code=400, detail="Only PDF files are allowed")
            
            # Save file temporarily
            temp_path = f"temp_{file.filename}"
            with open(temp_path, "wb") as buffer:
                content = await file.read()
                buffer.write(content)
            
            # Process PDF
            chunks_processed = await process_pdf(temp_path)
            
            # Cleanup
            os.remove(temp_path)
            
            results.append({
                "filename": file.filename,
                "chunks_processed": chunks_processed
            })
        
        return {"status": "success", "processed_files": results}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/search/")
async def search_similar(query: str, limit: int = 5):
    try:
        # Generate query embedding
        query_embedding = embeddings.embed_query(query)
        
        # Search in QuantDB
        results = db.table("embeddings").search(
            query_vector=query_embedding,
            limit=limit
        ).to_df()
        
        # Format results
        search_results = []
        for _, row in results.iterrows():
            search_results.append({
                "text": row["text"],
                "metadata": row["metadata"],
                "similarity_score": row["_distance"]
            })
        
        return {"results": search_results}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
@app.get("/health")
async def health_check():
    return {"status": "healthy", "database": "connected"}

@app.exception_handler(Exception)
async def global_exception_handler(request, exc):
    return {
        "status": "error",
        "message": str(exc),
        "path": request.url.path
    }
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        workers=4,
        reload=False
    )
