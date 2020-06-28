const express = require('express');
const passport = require('passport');
const userController = require("../controllers/userController")
const router = express.Router();

router.get('/register',userController.register);
router.post('/register',userController.registerpost);
router.get('/login',userController.login);
router.post('/login', passport.authenticate('local'),userController.loginpost);
router.get('/logout',userController.logout);

module.exports = router;