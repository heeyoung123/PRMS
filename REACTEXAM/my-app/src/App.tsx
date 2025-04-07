import React from 'react';

import './App.css';

function App() {
  const style ={
    backgroundColor: 'white',
    color: 'black',
    fontSize: '2rem',
  }
  let name ="리액트"
  return (
    <div className="container">
	    <div style={style}>
        인라인 스타일링
        {/*주석*/}
      <div className="test">
        {name}
      </div>
      </div>
    </div>
  );
}

export default App;
