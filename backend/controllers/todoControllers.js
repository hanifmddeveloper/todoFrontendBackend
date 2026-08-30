  const Todo = require('../models/todoModels')

//   make todo
  const createTodo = (req,res)=>{
    
  const {task, status,priority}= req.body
  //  console.log(req.file.path);
   
   if(!task || !priority){
    return res.status(400).json({
     success:false,
     message:'pleaase fill all fields'
    })
   }
//     to save in data base
 const todo = new Todo({
    task: task,
    priority: priority,
    path: req.file.path
 })

 todo.save()
 res.status(201).json({
    success: true,
    message:'Todo created'
 })

 }
 const allTodos = async (req,res)=>{
  try {
       let data = await Todo.find({})
   res.status(200).json({
     success: true,
     message: "Todo Collected",
     data : data  
   })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success:false,
      error: error
    })
  }
}
 
  let todoDelete = async(req,res)=>{
    try {
       const {id} = req.params
    let detatedData = await Todo.findByIdAndDelete(id)
    res.status(200).json({
      success: true,
      message: 'Todo deleted'
    })
    } catch (error) {
      console.log(error);
      
    }
   
}
let todoUpdate = async (req,res)=>{
  try {
     const {id} = req.params
  let updatedata = await Todo.findByIdAndUpdate({_id: id},req.body)
  res.status(200).json({
    success: true,
    message: "Todo is updated"
  })
  } catch (error) {
    console.log(error);
  }
}








module.exports = {createTodo,allTodos,todoDelete,todoUpdate}