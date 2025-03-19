const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./book/book.routes');
const cors = require('cors');

const sequelize = require('./config/sequelize');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/book', bookRoutes);
app.use((req, res, next) => {
    res.status(404).json({ error: 'Resource not found' });
});

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
