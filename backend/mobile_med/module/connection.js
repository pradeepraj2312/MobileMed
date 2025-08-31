const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/UserData").then(()=>{
    console.log({message :"conected to database......."})
}).catch((error)=>{
    console.log({message :"not connected......"})
})