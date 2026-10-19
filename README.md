# ragproject

## Architecture verified from source

This repository contains a FastAPI backend and a Vite/React frontend. The backend accepts PDF uploads at `POST /upload/`, extracts and chunks documents with LangChain, creates OpenAI embeddings, stores vectors in QuantDB, and exposes similarity search at `GET /search/`. The frontend in `my-rag-app` is a separate React/Tailwind interface.

## Current status

The RAG ingestion/search prototype is present. It requires `OPENAI_API_KEY` and QuantDB, has no root-level runbook, and should add authentication, file cleanup safeguards, persistent storage configuration, tests, and deployment instructions before production use.

