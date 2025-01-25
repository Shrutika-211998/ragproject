from langchain_community.document_loaders import PyMuPDFLoader
import os
from langchain_openai import OpenAIEmbeddings

file_path = "AI_Engineer.pdf"
loader = PyMuPDFLoader(file_path)
docs = loader.load()
print(docs)
import getpass
import os

if not os.environ.get("OPENAI_API_KEY"):
  os.environ["OPENAI_API_KEY"] = getpass.getpass("Enter API key for OpenAI: ")

from langchain_openai import OpenAIEmbeddings

embeddings = OpenAIEmbeddings(model="text-embedding-3-small")


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
print("-------------------------------------------- ")
query = "Give me Vertex AI Experiences "
print(query)
found_docs = qdrant.similarity_search(query)
print(found_docs)
