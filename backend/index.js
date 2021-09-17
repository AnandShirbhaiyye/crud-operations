const express = require('express');
const mongoose = require('mongoose');
import route from './route/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const route = express.Router();

route.get('/',(request,response)=>{
       response.status(200).json("Hiii from Road to Code");
})

app.use('/users',route)

const PORT = 8000;
const URL = 'mongodb+srv://admin:admin@book.2d4lx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


mongoose.connect(URL,{useNewUrlParser: true, useFindAndModify: false }).then(() => { 
   
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})


app.listen(PORT, ()=> (
    console.log(`server is running successfully on port ${PORT}`)
    ));