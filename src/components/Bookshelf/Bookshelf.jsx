import React from 'react'
function Bookshelf() {
const [books, setBooks] = React.useState([])
const [newBook, setNewBook] = React.useState({ title: '', author: '' })
   
function handleInputChange(e) {
  const { name, value } = e.target
  setNewBook({ ...newBook, [name]: value })
}

function handleSubmit(e) {
  e.preventDefault() // Prevent the default form submission behavior
  setBooks([...books, newBook])
  setNewBook({ title: '', author: '' })
}

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        {/* Form will go here */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            value={newBook.title} 
            onChange={handleInputChange} 
          />
          <label htmlFor="author">Author:</label>
          <input 
            type="text" 
            id="author" 
            name="author" 
            value={newBook.author} 
            onChange={handleInputChange} 
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">  {/* Display the list of added books mapped to individual book cards */}
        <h3>Bookshelf</h3>
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bookshelf