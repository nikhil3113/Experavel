const express = require('express');
const mongoose  = require('mongoose');

const experienceSchema = new mongoose.Schema({
    travellerName: {
        type: String,
        required: true
    },
    placeVisited : {
        type: String,
        required: true
    },
    travellerExperience : {
        type: String,
        required: true
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        }
    ],
    likes:{
        type: Number,
        default: 0
    }
});

const Experience = mongoose.model("Experience", experienceSchema);
module.exports = {Experience};