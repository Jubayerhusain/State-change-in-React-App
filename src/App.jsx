/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Lets Start State Canging</h1> 
      <br />
      <br />
      <Counter></Counter>  
    </>
  )
}

export default App
