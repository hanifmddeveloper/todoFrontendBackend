require ('node:dns').setServers(['1.1.1.1','8.8.8.8'])
const express = require ('express')
const app = express()
const mongoose = require ('mongoose')
const {createTodo,allTodos,todoDelete,todoUpdate}= require('./controllers/todoControllers')
const multer = require('multer')
const upload = require('./utils/storage')
const cors = require('cors')
const dbConnection = require('./config/databaseConfig')



// for store image
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null,'./uploads');
//   },
//   filename: function (req, file, cb) {
//     let uniqueName = 'img'+'-'+ Date.now()
//     cb(null,uniqueName + '-' + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// make database
app.use(express.json())
app.use(cors())
app.use('/uploads',express.static('uploads'))

dbConnection()
// mongoose.connect('mongodb+srv://node2601:r3y8NmLjYqJcPV16@cluster0.e0xdn6f.mongodb.net/todo?appName=Cluster0')
//   .then(() => {console.log('Data base Connected!')}).catch(err=>{
//     console.log(err);
//   })



// making todo rouder and make todo  and make another folder we use express for separate file 
 app.post('/create/todo',upload.single('image'),createTodo)                                       // data will come from backend 
 app.get('/alltodos',allTodos)
 app.delete('/delete/:id',todoDelete)
 app.post('/update/:id',todoUpdate)



// commect to server
app.listen(5000,()=>{
  console.log("server is running");
  
})

