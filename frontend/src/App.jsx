import { useState, useEffect } from "react";
import axios from 'axios'

function App() {
  let [task, setTask] = useState('')
  let [priority, setPriority] = useState('')
  let [info, setInfo] = useState({})
  let [data, setData] = useState([])
  let [isUpdate, setIsUpdate] = useState(false)
  let [id, setId] = useState('')

  let handleclick = async () => {
    let data = await axios.post('http://localhost:5000/create/todo', {
      "task": task,
      "priority": priority
    })

    //  console.log(data.data);

    setInfo(data.data)
    let todosdata = await axios.get('http://localhost:5000/alltodos')
    setData(todosdata.data.data);
  }
  let handleTaskChange = (e) => {
    setTask(e.target.value);
  }

  let handleOptionelect = (e) => {
    setPriority(e.target.value);
  }
  useEffect(() => {
    async function todos() {
      let todosdata = await axios.get('http://localhost:5000/alltodos')
      setData(todosdata.data.data);
    }
    todos()
  }, [])

  let handleDelete = async (id) => {
    let data = await axios.delete(`http://localhost:5000/delete/${id}`)
    console.log(data)
    let todosdata = await axios.get('http://localhost:5000/alltodos')
    setData(todosdata.data.data);

  }

  let handleEdit = async (item) => {
    setTask(item.task)
    setPriority(item.priority)
    setIsUpdate(true)
    setId(item._id)
  }

  let handleUpdate = async (item) => {
    let data = await axios.post(`http://localhost:5000/update/${id}`, {
      "task": task,
      "priority": priority
    })
    setInfo(data.data);
    let todosdata = await axios.get('http://localhost:5000/alltodos')
    setData(todosdata.data.data);

  }

  let handleSubmit = async (e) => {
     e.preventDefault()
    // console.log(e.currentTarget);
    
    let formData = new FormData(e.currentTarget)
    const task = formData.get("task");
    const priority = formData.get("priority");
    const image = formData.get("image");
    // console.log(task,priority);
    // console.log(image);
   let data = await axios.post('http://localhost:5000/create/todo', 
   formData)  

   console.log(data);
   
    setInfo(data.data);
    let todosdata = await axios.get('http://localhost:5000/alltodos')
    setData(todosdata.data.data);
   }

  return (
    <form onSubmit={handleSubmit} >
      <h1>Todo</h1>
      {info.success
        ?
        <p>{info.message}</p>
        :
        <p style={{ background: 'red' }} >{info.message}</p>

      }
      <input name='task' onChange={handleTaskChange} type="text" value={task} />
      <select name='priority' onChange={handleOptionelect} value={priority} >
        <option value='low'>Low</option>
        <option value='medium'>Medium</option>
        <option value='high'>High</option>
      </select>
      <input name='image' type="file" />
      {isUpdate
        ?
        <button onClick={handleUpdate} >Update</button>
        :
        // <button onClick={handleclick} >submit</button>
        <button type='submit'>submit</button>
      }
      <ul>
        {data.map(item => (
          <>
            <li>{item.task} ==== {item.priority} ===={item.status}</li>
            <img width={50} src={`http://localhost:5000/${item.path} `} alt="" />
            <button onClick={() => handleEdit(item)} >Edit</button>
            <button onClick={() => handleDelete(item._id)} >Delete</button>
          </>
        ))}
      </ul>
    </form>
  )
}

export default App
