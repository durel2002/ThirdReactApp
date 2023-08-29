import React, {useState} from 'react';
import './App.css';

function App() {
  const [count,setCounter] = useState(0);
  const clicked=()=>setCounter(count+1);

  return (
   <>
  <h1> You Have Clicked the button <b><i>{count}</i></b> times</h1>
  <button onClick={clicked}>Button</button><br/>
  <input type="text"value={count}/>
   </>
  );
}

export default App;
