import {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount]=useState(0);
  
  const add = () => {
    setCount(count+1);
  };

  const sub = () => {
    setCount(count-1);
  };

  return (
   <div className='ui main'>
    <button className='ui button' onClick={(e)=> add()}>+</button>
    <div>
    <label className='ui label'>{count}</label>
    </div>
    
   <div>
   

    <button className='ui button' onClick={(e)=> sub()}>-</button>
   </div>
    
   </div>
  );
}
export default App;
