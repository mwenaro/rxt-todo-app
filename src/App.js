import React,{useState} from "react"
import 'w3-css/w3.css';
import uuid from 'uuid'

function App() {
  return (
    <div className="w3-container w3-card-4">
      <header className="w3-teal ">
	  <h1>My Lovely Todo App</h1>
	 
       </header>
	    <Todos />

		<footer className=" w3-teal"> 
		@Tods 2022 { Date("y")}
		</footer>

    </div>
  );
}
const Todos =()=>{
	const [todos,setTodos]=useState([
		{id:1, title:"wake up",completed:false},
		{id:2,title:"reading a book",completed:false},
		{id:3,title:"jogging",completed:false}
	])
	const editTodo=id=>console.log(" todo deleted " +id)
/*
const toggleCompleted2=(id,index)=>{
		let newt=todos.map(todo=>{...todo,todo.completed:`${todo.id===id?!todo.completd:todo.completed}`})
		setTodos(newt);
	}
	*/
	const toggleCompleted=(id,index)=>{
	let i=todos.indexOf(todos.filter(todo=>todo.id===id).pop())
	let newt=[...todos]
	newt[i].completed=!newt[i].completed
		setTodos(newt);
	}
const toggleCompleted1=(id,index)=>{
	let newt=[...todos]
	newt[index].completed=!newt[index].completed
		setTodos(newt);
	}
	const removeTodo=id=>setTodos(todos.filter(todo=>todo.id!==id))
	
const addTodo=todo=>setTodos([...todos,todo])
return (
<div className="w3-container">
	<h2>Todos Here</h2>
	<div>
<CreateTodo addTodo={addTodo} />
	</div>
<table className='w3-table-all'>
<thead>
	<tr className="w3-red"> 
	<th>ID</th>
	<th>TITLE</th>
	<th>STATUS</th>
	<th colSpan='3'>ACTTION</th>
	</tr>
	</thead>
	<tbody>
	{
	todos.map(({id,title,completed},index)=><tr key={index}>
		<td>{index+1}</td>
		<td>{title}</td>
		<td>{completed?"YES":"NO"}</td>
			<td><button className="w3-btn w3-btn-block w3-primary" onClick={()=>toggleCompleted(id,index)}>Toggle Complted</button></td>
			<td><button className="w3-btn w3-tbn-block w3-info" onClick={()=>editTodo(id)}>Edit</button></td>
			<td><button className="w3-btn w3-btn-block w3-danger" onClick={()=>removeTodo(id)} >Remove</button></td>
	</tr>)
	}
	</tbody>
	</table>
	</div>
)
}

const CreateTodo=({addTodo})=>{
	const[todo,setTodo]=useState({id:null,title:" ",completd:false})

	const handleInput =(e)=>{
		e.preventDefault()
setTodo({...todo,
[e.target.name]:e.target.value
})
		if(e.key==="Enter"){
			console.log(e.key)
		handleSubmit(e)
		}

	}
	const handleSubmit=e=>{
		e.preventDefault()
		addTodo({...todo,id:uuid()})
		setTodo({id:null,title:"",completed:false})
	}
	return (
<div >
<label>Title <input className="w3-input" type="text"  value={todo.title} name="title" onChange={e=>handleInput(e)} placeholder=" todo title" /></label>
 


<button className="w3-btn w3-primary" onClick={e=>handleSubmit(e)}>Create</button>
</div>
	)
}
export default App;
