const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { postClient, getClient } = require('./controller/serviceController');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.enable('trust proxy');
app.use(cors());
app.options('*', cors());


//generate conenction to DB
const DB = "mongodb+srv://kerwin:1234567890@cluster0.puilz.mongodb.net/super-api?retryWrites=true&w=majority"

try {
    mongoose.connect(DB)
        .then(() => {
            console.log('DB connected 🚀')
        })
} catch (error) {
    console.log(error)
}




//generate endpoints
app.post('/api/client', postClient);
app.get('/api/client', getClient);



app.listen(process.env.PORT || 3080,()=>{
    console.log(`app listening on port ${process.env.PORT}`)
})