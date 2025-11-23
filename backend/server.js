// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes
const booksRoutes = require('./src/routes/booksRoutes'); // sesuaikan path jika perlu
const authRoutes = require('./routes/authRoutes');       // ← tambahkan ini

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Gunakan routes
app.use('/api/books', booksRoutes);
app.use('/api/auth', authRoutes); // ← endpoint: /api/auth/register & /api/auth/login

app.get('/', (req, res) => {
  res.json({ message: 'Bookstore API with Auth ✅' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});