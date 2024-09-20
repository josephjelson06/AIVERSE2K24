const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const path = require('path');
require('dotenv').config();
// Import cors


const app = express();

// Enable CORS for all routes


// Enable CORS for specific domain and methods


// Middleware to handle JSON and URL-encoded data
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory (optional if you use the default "views" folder)
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


// Use routes defined in 'routes.js'
app.use('/', routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
