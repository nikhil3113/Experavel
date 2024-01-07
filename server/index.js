const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const route = require("./routes/travelRoute.js");
const commentRoute = require("./routes/commentRoute.js");


const app = express();

dotenv.config();

app.use(bodyParser.json()); 
app.use(cors(
    {
        origin: ['https://experavel.vercel.app/'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }
));

mongoose.connect(process.env.MONGO_URL)
        .then(() =>{
            console.log("Database connected");
        })
        .catch((error) =>{
            console.log(error);
        })

app.use('/',route);
app.use('/',commentRoute)



app.listen(process.env.PORT || 5000, () =>{
    console.log(`Server listening on port ${process.env.PORT || 5000}`);
})