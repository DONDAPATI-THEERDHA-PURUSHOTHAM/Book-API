const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// ✅ HOMEPAGE ROUTE (this fixes "Cannot GET /")
app.get('/', (req, res) => {
  res.send('📚 Welcome Mr. Porus! Your Book API is working!');
});

// ✅ In-memory data
let books = [
  { id: 1, title: 'Harry Potter', author: 'J.K. Rowling' },
  { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien' }
];

// ✅ GET: Return all books
app.get('/books', (req, res) => {
  res.json(books);
});

// ✅ POST: Add a new book
app.post('/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json({ message: 'Book added', book: newBook });
});

// ✅ PUT: Update a book by ID
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedBook = req.body;

  // ✅ Validate incoming data
  if (!updatedBook || typeof updatedBook.id !== 'number' || !updatedBook.title || !updatedBook.author) {
    return res.status(400).json({ message: 'Invalid book data. ID, title, and author are required.' });
  }

  const index = books.findIndex(book => book.id === id);
  if (index !== -1) {
    books[index] = updatedBook;
    res.json({ message: 'Book updated', book: updatedBook });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});



// ✅ DELETE: Remove a book by ID
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(book => book.id !== id);
  res.json({ message: `Book with ID ${id} deleted` });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`📡 Server is running at http://localhost:${PORT}`);
});
