# 📚 Book API - Node.js + Express

Welcome! This is a simple and clean REST API project built by **DONDAPATI THEERDHA PURUSHOTHAM** using **Node.js** and **Express.js** to manage a list of books.  
It performs basic **CRUD operations** and stores book data **in memory** — no database required!

## 🚀 Features

- 📖 View all books (`GET /books`)
- ➕ Add a new book (`POST /books`)
- 🔁 Update an existing book by ID (`PUT /books/:id`)
- ❌ Delete a book by ID (`DELETE /books/:id`)
- 🌐 Friendly homepage message (`GET /`)

## 📦 Tech Stack

- Node.js
- Express.js
- JSON (for request & response)
- Postman (for testing API)

## 🧪 How to Run the Project

1. **Clone this repository**:
   git clone https://github.com/your-username/book-api.git
   cd book-api
Install dependencies:
npm install
Start the server:
node index.js
✅ Server runs at:
http://localhost:3000

🔄 Sample Book Structure
json
{
  "id": 1,
  "title": "Harry Potter",
  "author": "J.K. Rowling"
}
🔥 API Endpoints & Examples
Method	Endpoint	Description
GET	/books	Get all books
POST	/books	Add a new book
PUT	/books/:id	Update a book by ID
DELETE	/books/:id	Delete a book by ID

📮 Example Postman Usage
✅ Add Book (POST /books)
Body → raw → JSON:
json
{
  "id": 3,
  "title": "Wings of Fire",
  "author": "A.P.J Abdul Kalam"
}
🔁 Update Book (PUT /books/3)
json
{
  "id": 3,
  "title": "Wings of Fire (Updated)",
  "author": "Dr. Kalam"
}
❌ Delete Book (DELETE /books/3)

🧔 Author
👑 DONDAPATI THEERDHA PURUSHOTHAM
🎯 Tech Explorer | AI & ML Student | Backend Learner | Future Full-Stack Dev
💬 Reach out for collaboration, mentorship, or learning together!

🏁 Final Note
This project is perfect for beginners to understand the core of backend development using JavaScript.
Feel free to fork, star ⭐, or suggest improvements!









