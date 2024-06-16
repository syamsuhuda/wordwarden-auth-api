const express = require('express');
const router = express.Router();
const { register, login, getUser } = require('../controllers/auth.js');

router.route('/login').post(login);
router.route('/register').post(register);
router.route('/user/:uid').get(getUser);

module.exports = router;
