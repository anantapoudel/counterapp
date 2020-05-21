import React, { useState } from 'react';

import './App.css';
function App() {
const [state, changeState]= useState(0);

const upCounter = () => changeState(state+1);
const downCounter= () => changeState(state-1);


  return (
    <div className="App">
      
      <h1>Counter App</h1> 
     <button onClick =  {upCounter}> Increase(+) </button>
     <p>{state}</p>
     <button onClick = {downCounter}> Decrease(-) </button>

    </div>
  );
}

export default App;
