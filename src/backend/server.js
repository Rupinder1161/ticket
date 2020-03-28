const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// mongodb atlas
const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true});

const connection = mongoose.connection;

connection.once('open', () =>{

    console.log('MongoDb database connection established successfully');
})

//mongodb atlas

//routes
 const excerciseRouter = require('./routes/movies')
 const userRouter = require('./routes/user')
// //  const gur = require('../src/gur')
 app.use('/excercises',excerciseRouter);
 app.use('/users',userRouter)

//  app.use('/lub',gur)


//routes


// app.get('/',function(req,res){
//     res.send('hello World');
//     console.log('Accessing the secret section ...')
//  })




 app.listen(port, () =>{
    console.log(`server is running on port : ${port}`);
});
