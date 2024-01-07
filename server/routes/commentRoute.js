const express = require('express')
const router = express.Router();
const { addComment, showComment } = require('../controllers/CommentController.js');

router.post('/comment/:id',addComment);
router.get('/comment/:id', showComment);

module.exports = router