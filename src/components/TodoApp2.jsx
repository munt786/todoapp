import { useState,useEffect,useRef } from "react";
import { FaCheck } from "react-icons/fa";
import './TodoApp2.css'

export default function TodoApp2() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a To-Do App", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const inputRef=useRef(null)

  useEffect(()=>{
    const loadData=JSON.parse(localStorage.getItem('todo')) || [];
    setTasks(loadData);
    inputRef.current.focus();
  },[])

  const addTask = () => {
    if (newTask.trim()) {
      const addTask=([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setTasks(addTask);
      localStorage.setItem('todo',JSON.stringify(addTask))
      setNewTask("");
    }
  };
  const toggleComplete = (id) => {
    const updatedTasks=tasks.map((task)=>
      task.id===id?{...task, completed: !task.completed}:task
    )
    setTasks(updatedTasks);
    localStorage.setItem('todo',JSON.stringify(updatedTasks));
  };
  const deleteByid=(id)=>{
    const updatedTasks=tasks.filter((task)=>task.id!==id);
    setTasks(updatedTasks);
    localStorage.setItem('todo',JSON.stringify(updatedTasks))
  }
  return (
    <div className="out-box">
      <div className="box">
      
        <div className="inputContainer">
            <h1 style={{fontFamily:'Sans',padding:'10px'}}>ToDo App</h1>
            <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="inputBox"
            ref={inputRef}
            />
            <button onClick={addTask}>Add</button>
        </div>

        <div className="todoList">
            {tasks.map((task)=>(
                <span key={task.id} className="listItem">
                    {task.text}
                    <span>
                      <button onClick={()=>toggleComplete(task.id)}>
                        {task.completed ? <FaCheck/>:"Complete"}
                      </button>
                      <button onClick={()=>deleteByid(task.id)}>Delete</button>
                    </span>
                </span>
            ))}
        </div>
    </div>
    </div>
  );
}