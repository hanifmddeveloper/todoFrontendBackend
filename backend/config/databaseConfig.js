const mongoose = require ('mongoose')

let dbConnection = ()=>{
return mongoose.connect('mongodb+srv://node2601:r3y8NmLjYqJcPV16@cluster0.e0xdn6f.mongodb.net/todo?appName=Cluster0')
  .then(() =>{
    console.log('Data base Connected!')
  }).catch(err=>{
    console.log(err);
  })
}

module.exports = dbConnection





