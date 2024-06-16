const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./src/routes/auth');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to WordWarden Application');
});

// Auth routes
app.use('/v1/auth', authRoutes);

// Start Server
const port = 8080; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
