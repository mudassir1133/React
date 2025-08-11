import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=' bg-green-500 p-4 rounded-lg mb-10 '>Bio Data </h1>



     <Card />
     
     <Card />

    </>
  )
}

export default App
