const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('./config/database');

// Connect To Database
mongoose.connect(config.database);

// On Conncection
mongoose.connection.on('connected', () => {
   console.log('Connected to databse '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log('Databse error : '+err);
});

const app = express();

const users = require('./routes/users');

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users',users);

// Index Route
app.get('/' ,(req, res) => {
    res.send('Invalid Endpoint');
});

// 모든 get요청일때 index.html이 동작하도록
app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname,'public/index.html'));
});

// Start Server
app.listen(port,() => {
    console.log('Server started on port '+port);
});