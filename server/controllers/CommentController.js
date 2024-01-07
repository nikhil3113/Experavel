const {Comment} = require('../models/comment.js');
const {Experience} = require('../models/experience.js');

const addComment = async (req, res) => {

    const {id} = req.params;

    const { commenterName, commenterText } = req.body;
    try{
        if(!commenterName || !commenterText){
            return res.status(400).json({message: 'Send all required fields'})
        }

        const newComment = new Comment({
            commenterName,
            commenterText
        })

       await newComment.save();

        //! Find the corresponding experience and add the comment to its comments array

       const experience = await Experience.findById(id);
       
       if(!experience){
           return res.status(404).json({message: 'Experience not found'})
       }

       experience.comments.push(newComment);
       await experience.save();

       res.status(201).json(newComment)

    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const showComment = async (req, res) => {
    const {id} = req.params;
    try{
        const experience = await Experience.findById(id).populate('comments');
        if(!experience){
            return res.status(404).json({message: 'Experience not found'})
        }

        res.status(200).json(experience.comments)

    }catch(err){
        res.status(500).json({message: err.message})
    }  
}

module.exports = {
    addComment,
    showComment
}