import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/books/")
      .then(res => setBooks(res.data));
  }, []);

  const upload = async () => {
    await axios.post("http://127.0.0.1:8000/api/books/upload/");
    alert("Books Loaded");
  };

  const ask = async () => {
    const res = await axios.post("http://127.0.0.1:8000/api/ask/", {
      question
    });
    setAnswer(res.data.answer);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>📚 Book AI Platform</h1>

      <button onClick={upload}>Load Books</button>

      <h2>Books</h2>
      {books.map(b => (
        <div key={b.id}>
          <h3>{b.title}</h3>
          <p>{b.summary}</p>
        </div>
      ))}

      <h2>Ask Question</h2>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={ask}>Ask</button>

      <p><b>Answer:</b> {answer}</p>
    </div>
  );
}

export default App;