const express = require('express');
const router = express.Router();

// Register
router.get('/register', (req, res) => {
    res.send('Register');
});

// Authenticate
router.post('/authenticate', (req, res) => {
    res.send('authenticate');
});

// Profile
router.get('/profile', (req, res) => {
    res.send('profile');
});

// Validate
router.get('/validate', (req, res) => {
    res.send('Validate');
});


module.exports = router;