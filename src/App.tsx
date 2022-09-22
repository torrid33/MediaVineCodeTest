import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [books, setBooks] = useState(null);

  // + adding the use
  useEffect(() => {
    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch(
        "https://www.anapioficeandfire.com/api/books"
      );
      const data = await response.json();

      // store the data into our books variable
      setBooks(data);
    }

    getData();
  }, []); //

  return (
    <div className="App">
      <h1>Data Fetch Sample</h1>
      (Yes simple example but a recruiter asked me to post)
      {/* display books from the API */}
      {books && (
        <div className="books" align="left">
          {/* loop over the books */}
          {books.map((book, index) => (
            <div key={index}>
              <h2>{book.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
