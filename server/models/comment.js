const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    commenterName:{
        type: String,
        required: true
    },
    commenterText :{
        type: String,
        required: true
    }
});
 
const Comment = mongoose.model("Comment", commentSchema);
module.exports = {Comment};