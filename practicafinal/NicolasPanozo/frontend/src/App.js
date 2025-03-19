import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    language: '',
    publication_date: '',
    editorial_email: '',
    editorial_cellphone: '',
  });
  const [records, setRecords] = useState([]);

  // Fetch existing records from the backend
  useEffect(() => {
    fetch('http://localhost:5000/records')
      .then(res => res.json())
      .then(data => setRecords(data));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/records', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newRecord => {
        setRecords([...records, newRecord]);
        setFormData({
          title: '',
          author: '',
          language: '',
          publication_date: '',
          editorial_email: '',
          editorial_cellphone: '',
        });
      });
  };

  return (
    <div className="App">
      <h1>Project Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            pattern="[A-Za-z ]+"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            pattern="[A-Za-z ]+"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Language:</label>
          <input
            type="text"
            name="language"
            pattern="[A-Za-z ]+"
            value={formData.language}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Publication Date:</label>
          <input
            type="date"
            name="publication_date"
            value={formData.publication_date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Editorial Email:</label>
          <input
            type="email"
            name="editorial_email"
            value={formData.editorial_email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Editorial Cellphone:</label>
          <input
            type="text"
            name="editorial_cellphone"
            pattern="[0-9]+"
            value={formData.editorial_cellphone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>

      <h2>Records</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Language</th>
            <th>Publication Date</th>
            <th>Editorial Email</th>
            <th>Editorial Cellphone</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={record.id} className={index % 2 === 0 ? 'even' : 'odd'}>
              <td>{index + 1}</td>
              <td>{record.title}</td>
              <td>{record.author}</td>
              <td>{record.language}</td>
              <td>{record.publication_date}</td>
              <td>{record.editorial_email}</td>
              <td>{record.editorial_cellphone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
