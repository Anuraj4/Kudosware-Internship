const express = require('express');
const multer = require('multer');
const userController = require('../controllers/userController');

const router = express.Router();
const upload = multer();

router.post('/upload', upload.single('resume'), userController.createUser);

module.exports = router;
