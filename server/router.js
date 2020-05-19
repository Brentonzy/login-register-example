const express = require('express');
const users = require('./controllers/users');

let router = express.Router();

router.route('/login')
    .post(users.login);
    
router.route('/register')
    .post(users.register);

module.exports = router;