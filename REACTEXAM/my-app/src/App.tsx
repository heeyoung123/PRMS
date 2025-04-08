import React from 'react';
// import ClassCom from "./ClassCom";
// import FuncCom from "./FuncCom";
import './App.css';
import TodoList from "./Todolist"
import MapTest from "./MapTest"
import Clock from "./Timer";

// function App() {
//   const style ={
//     backgroundColor: 'white',
//     color: 'black',
//     fontSize: '2rem',
//   }
//   let name ="리액트"
//   return (
//     <div className="container">
// 	    <div style={style}>
//         인라인 스타일링
//         <ClassCom/>
//         <FuncCom/>
//         {/*주석*/}
//       <div className="test">
//         {name}
//       </div>
//
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <div className="container">
      <TodoList></TodoList>
      <MapTest></MapTest>
      <Clock></Clock>
    </div>
  )
}

export default App;
