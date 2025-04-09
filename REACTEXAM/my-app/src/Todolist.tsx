import React, {useState} from "react";
import TodoModal from "./TodoModal";

type Todo ={
	id: number;
	text:string;
	isChecked:boolean;
}

 const TodoList:React.FC=()=>{
	 const title : string = "오늘 할 일"
	 const [todos,setTodos]=useState<Todo[]>([{
		 id:1, text:'공부하기',isChecked:false
	 },
		 {id:2,text:'밥먹기',isChecked:true},
		 {id:3,text:'미팅하기',isChecked:false},])

	 const [newTodo,setNewTodo]=useState<string>('');

	 const [showDetail,setShowDetail]=useState<boolean>(false);
	 const [selectedTodo,setSelectedTodo]=useState<Todo|null>(null)
	 const addTodo = ()=>{
		 if(newTodo.trim() !==''){
			 setTodos([...todos,{id:Date.now(),text:newTodo,isChecked:false}])
		 }
	 }
	 const deleteTodo=(id:number)=>{
			setTodos(todos.filter((todo)=>todo.id!==id))
	 }
  const handleCheckChange=(itemId:number)=>{
		 setTodos((prevItem)=>prevItem.map((item)=>item.id ===itemId ? {...item, isChecked : !item.isChecked}:item))
  }
	const handleTodoClick =(todo:Todo)=>{
			setShowDetail(true);
			setSelectedTodo(todo)
	}
	const handleCloseDetail=()=>{
		 setShowDetail(false);
	}
	return (
		<div className="container">
			<h1>{title}</h1>
			<div>
				<input type={"text"} placeholder={"할일 입력"} style={{margin:'10px', writingMode:'horizontal-tb',padding:'10px'}} onChange={(e)=>setNewTodo(e.target.value)}/>
				<button style={{padding:'10px'}} onClick={addTodo}>추가</button>
			</div>
			<div className='board'>
				<ul>
					{todos.map((todo,index)=>(
						<li key={index}>{todo.id}
						<input type='checkbox' onChange={()=>{
							handleCheckChange(todo.id)
						}}/>
							<span onClick={()=>handleTodoClick(todo)}>{todo.isChecked ? <del>{todo.text}</del>:<span>{todo.text}</span>}</span>
							<button style={{padding:'5px', margin:'10px'}} onClick={()=>deleteTodo(todo.id)}>삭제</button>
						</li>
					))}
				</ul>
				<TodoModal show={showDetail} todo={selectedTodo} handleClose={handleCloseDetail}></TodoModal>
			</div>

		</div>
	);
}


export default TodoList;


//  writingMode:'horizontal-tb' -> 입력방향을 수평으로 설정하겠다.
 //:React.FC 란 Function Component의 약자이다. 프롭스의 타입을 명시해주는 역할을 한다.