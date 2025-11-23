require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const booksRoutes = require('./src/routes/booksRoutes');

const app = express();
const PORT = process.env.PORT || 5173;

app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/api/books', booksRoutes);

// root
app.get('/', (req, res) => res.json({ message: 'Bookstore API is running' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));