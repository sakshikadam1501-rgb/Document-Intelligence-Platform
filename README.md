# 📚 Document Intelligence Platform (AI + RAG)

A full-stack AI-powered web application that processes book data, generates insights, and enables intelligent question-answering using a Retrieval-Augmented Generation (RAG) pipeline.

---

## 🚀 Features

* 📖 Book data scraping using Selenium
* 🗄️ Storage of metadata in MySQL
* 🔍 Vector search using ChromaDB
* 🤖 AI-powered insights:

  * Book Summary
  * Recommendation System
* 💬 Question Answering over books (RAG pipeline)
* 🌐 REST APIs using Django REST Framework
* 🎨 Frontend built with React + Tailwind CSS

---

## 🧠 RAG Pipeline Flow

1. User asks a question
2. System generates embeddings for the query
3. Searches similar book chunks in ChromaDB
4. Builds context from retrieved chunks
5. Sends context + query to LLM
6. Returns answer with sources

---

## 🛠️ Tech Stack

**Backend**

* Python
* Django REST Framework
* MySQL

**AI / ML**

* Sentence Transformers
* ChromaDB (Vector DB)
* OpenAI API / LM Studio (local LLM)

**Frontend**

* ReactJS
* Tailwind CSS

**Automation**

* Selenium (for scraping books)

---

## 📂 Project Structure

```
book-ai-platform/
│
├── backend/
│   ├── books/
│   ├── api/
│   ├── rag/
│   ├── manage.py
│
├── frontend/
│   ├── src/
│
├── requirements.txt
├── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone <your-repo-link>
cd book-ai-platform
```

---

### 2️⃣ Backend Setup

```
cd backend
python -m venv venv
venv\Scripts\activate   # Windows

pip install -r requirements.txt
```

---

### 3️⃣ Database Setup (MySQL)

* Create database:

```
CREATE DATABASE bookdb;
```

* Update `settings.py`:

```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'bookdb',
        'USER': 'root',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

---

### 4️⃣ Run Migrations

```
python manage.py makemigrations
python manage.py migrate
```

---

### 5️⃣ Start Backend Server

```
python manage.py runserver
```

---

### 6️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

---

## 🔌 API Documentation

### 📥 GET APIs

#### Get All Books

```
GET /api/books/
```

#### Get Book Details

```
GET /api/books/{id}/
```

#### Get Recommendations

```
GET /api/books/{id}/recommend/
```

---

### 📤 POST APIs

#### Upload & Process Books

```
POST /api/books/upload/
```

#### Ask Question (RAG)

```
POST /api/ask/
```

**Request:**

```
{
  "question": "What is this book about?"
}
```

**Response:**

```
{
  "answer": "This book explains...",
  "sources": ["chunk1", "chunk2"]
}
```

---

## 🤖 AI Insights Implemented

### 1. Summary

* Generates concise summary from book description

### 2. Recommendation System

* Suggests similar books using embedding similarity

---

## 🧪 Sample Questions & Answers

**Q1:** What is the book about?
**A:** This book provides an overview of...

**Q2:** Recommend similar books
**A:** You may also like...

---

## 📸 Screenshots

> Add 3–4 screenshots here before submission

* Dashboard Page
* Book Detail Page
* Q&A Interface
* API Response (optional)

---

## 💡 Bonus Features (Optional)

* ✅ Caching responses
* ✅ Chunking strategies
* ✅ Loading states in UI
* ✅ Semantic search

---

## 📌 Future Improvements

* Chat history storage
* Multi-page scraping
* Advanced semantic chunking
* Better UI/UX

---

## 👩‍💻 Author

* Your Name

---

## 📄 License

This project is for educational and internship assignment purposes.
