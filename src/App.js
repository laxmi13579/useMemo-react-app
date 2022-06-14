import { useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState();
  const [dark, setDark] = useState(false);
  const squareNum =  useMemo(()=>{
    return slowFunction(number);
  },[number])

  const theme = useMemo(()=>{
    return {
      background: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    }},[dark])

  useEffect(()=>{
    console.log('theme changed')
  },[theme])

  const themeHandler = () => {
    setDark(preDart => !preDart);
    console.log('dark',dark)
  }

  function slowFunction(num){
    for(let i = 0; i<=1000000000;i++){}
    return num**2;
  }

  return (
    <>
      <input type='number' value={number} onChange={(e)=>setNumber(parseInt(e.target.value))}/>
      <button style={theme} onClick={themeHandler}>change theme</button>
      <p>square of {number} is {squareNum}</p>
    </>
  );
}

export default App;
