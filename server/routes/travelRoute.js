const express = require('express')
const router = express.Router();
const {addExperience, showExperience, deleteExperience,getExperience, likes, unLikes} = require('../controllers/TravelController.js');
const { addComment, showComment } = require('../controllers/CommentController.js');


router.get('/', showExperience)
router.post('/',addExperience)
router.delete('/:id', deleteExperience)
router.get('/:id',getExperience)
router.post('/like/:id',likes)
router.post('/unlike/:id',unLikes)

module.exports = router