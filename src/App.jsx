import './App.css'
import useStorage from './useStorage';
import { useState } from 'react'

function App() {

  const cssStyling ={
    width: '60%',
    height: '40%',
    padding: '4px 10px'
  };

const [storedValue,setStorage] = useStorage("storageKey","");
const [userInput , setUserInput] = useState(storedValue);

  const handelChange = (e) => {
    setUserInput(e.target.value);
    setStorage(e.target.value);
  }
  return (
    <>
      <h1>Learning Custom Hooks</h1>
      <input type="text" placeholder='Type something here' style={cssStyling}  onChange={handelChange}/>
    </>
  )
}

export default App
