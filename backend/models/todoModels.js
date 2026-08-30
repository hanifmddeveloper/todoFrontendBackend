const mongoose = require('mongoose')
const {Schema} = mongoose


const todoSchama = new Schema({
     task:{
        type:String,
        required: true
     },
     status:{
        type:String,
        enum:['pending','active','block'],
        default:'pending'
     },
     priority:{
        type: String,
        enum:['low','high','medium'],
        required: true
     },
     path:{
      type:String,
     }
   //   path:{
   //    url:{
   //        type:String,
   //    },
         
   //   }

})

module.exports = mongoose.model('Todo',todoSchama)