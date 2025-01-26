from dotenv import load_dotenv
from langchain_community.document_loaders import PyMuPDFLoader
import os
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain.chains import ConversationalRetrievalChain

# Load environment variables from .env file
load_dotenv()

file_path = "AI_Engineer.pdf"
loader = PyMuPDFLoader(file_path)
docs = loader.load()
print(docs)

# Using environment variable directly
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

# Initialize ChatOpenAI
chat = ChatOpenAI(
    model="gpt-4",
    temperature=0
)

from langchain_qdrant import QdrantVectorStore
from qdrant_client import QdrantClient
from qdrant_client.http.models import Distance, VectorParams

client = QdrantClient(":memory:")

client.create_collection(
    collection_name="demo_collection",
    vectors_config=VectorParams(size=1536, distance=Distance.COSINE),
)

vector_store = QdrantVectorStore(
    client=client,
    collection_name="demo_collection",
    embedding=embeddings,
)

from langchain_qdrant import RetrievalMode

qdrant = QdrantVectorStore.from_documents(
    docs,
    embedding=embeddings,
    location=":memory:",
    collection_name="my_documents",
    force_recreate=True,
    retrieval_mode=RetrievalMode.DENSE,
)

# Create a retrieval chain
qa_chain = ConversationalRetrievalChain.from_llm(
    llm=chat,
    retriever=qdrant.as_retriever(search_kwargs={"k": 3}),
    return_source_documents=True,
)

print("-------------------------------------------- ")
query = "Give me Vertex AI Experiences"
result = qa_chain({"question": query, "chat_history": []})
print("\nQuestion:", query)
print("\nAnswer:", result["answer"])
print("\nSource Documents:")
for i, doc in enumerate(result["source_documents"]):
    print(f"\nDocument {i+1}:")
    print(doc.page_content[:200] + "...")
