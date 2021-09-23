import "./styles.css";
import React, { useState, useEffect } from 'react';

export default function App() {
  const [books, setBooks] = useState(null);

   // + adding the use
    useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch("https://www.anapioficeandfire.com/api/books");
      const data = await response.json();

      // store the data into our books variable
      setBooks(data) ;
    }
  }, []); // <- you may need to put the setBooks function in this array


  return (
    <div className="App">
      <h1>GitHub Issues Code Challenge</h1>
      <h2>for MediaVine</h2>

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
