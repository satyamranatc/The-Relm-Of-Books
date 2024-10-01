import React from 'react';
import axios from "axios"
const styles = {
  container: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '30px',
    backgroundColor: '#f4f1ea', // Antique paper color
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Georgia, serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  title: {
    fontSize: '32px',
    color: '#3a3a3a',
    marginBottom: '10px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    fontStyle: 'italic',
  },
  form: {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'repeat(2, 1fr)',
    color:'black',
  },
  fullWidth: {
    gridColumn: '1 / -1',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#4a4a4a',
  },
  input: {
    padding: '10px',
    color:'black',
    border: '1px solid #d1c8b9',
    borderRadius: '4px',
    fontSize: '16px',
    backgroundColor: '#fff',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    padding: '10px',
    border: '1px solid #d1c8b9',
    borderRadius: '4px',
    fontSize: '16px',
    backgroundColor: '#fff',
    minHeight: '120px',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#8b4513', // Saddle brown
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  decorativeLine: {
    height: '2px',
    background: 'linear-gradient(to right, transparent, #8b4513, transparent)',
    margin: '20px 0',
  },
};




export default function AdminBookForm() {
 

    async function handleSubmit(e)
    {
        e.preventDefault();
        console.log(e.target);
        
        let Data = {
            id: e.target[0].value,
            title: e.target[1].value,
            author: e.target[2].value,
            genre: e.target[3].value,
            description: e.target[4].value,
            publicationYear: e.target[5].value,
            price: e.target[6].value,
        }
        console.log(Data);
        let Res = await axios.post("http://localhost:5100/api/books/add",{"Data":Data});
        console.log(Res.data);

    }



  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.title}>Bookstore Curator</h2>
        <p style={styles.subtitle}>Add a new literary treasure to our collection</p>
      </header>
      <div style={styles.decorativeLine}></div>
      <form onSubmit={handleSubmit}  style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="id" style={styles.label}>Book ID</label>
          <input
            id="id"
            type="number"
            style={styles.input}
            placeholder="Enter unique identifier"
          />
        </div>
        
        <div style={styles.inputGroup}>
          <label htmlFor="title" style={styles.label}>Title</label>
          <input
            id="title"
            type="text"
            style={styles.input}
            placeholder="Enter the book's title"
          />
        </div>
        
        <div style={styles.inputGroup}>
          <label htmlFor="author" style={styles.label}>Author</label>
          <input
            id="author"
            type="text"
            style={styles.input}
            placeholder="Enter author's name"
          />
        </div>
        
        <div style={styles.inputGroup}>
          <label htmlFor="price" style={styles.label}>Price ($)</label>
          <input
            id="price"
            type="number"
            step="0.01"
            style={styles.input}
            placeholder="Enter book price"
          />
        </div>
        
        <div style={styles.inputGroup}>
          <label htmlFor="rating" style={styles.label}>Rating</label>
          <input
            id="rating"
            type="number"
            step="0.1"
            min="0"
            max="5"
            style={styles.input}
            placeholder="Enter rating (0-5)"
          />
        </div>
        
        <div style={styles.inputGroup}>
          <label htmlFor="poster" style={styles.label}>Cover Image URL</label>
          <input
            id="poster"
            type="url"
            style={styles.input}
            placeholder="Enter cover image URL"
          />
        </div>
        
        <div style={{...styles.inputGroup, ...styles.fullWidth}}>
          <label htmlFor="description" style={styles.label}>Description</label>
          <textarea
            id="description"
            style={styles.textarea}
            placeholder="Enter a captivating description of the book"
          ></textarea>
        </div>
        
        <div style={styles.fullWidth}>
          <button type="submit" style={styles.button}>
            Add to Library
          </button>
        </div>
      </form>
    </div>
  );
}