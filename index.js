const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes'); 

const mongoDB = "mongodb+srv://shrey:sonudjdj@cluster0.ybbmimy.mongodb.net/agprop?retryWrites=true&w=majority";

async function connectToMongo() {
  await mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('MongoDB is connected');
}

connectToMongo();

app.use(express.json()); 
app.use('/api', routes); 

app.listen(5000, () => {
  console.log("Server is running on port: 5000");
});
