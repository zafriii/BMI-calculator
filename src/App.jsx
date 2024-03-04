import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/Header'
import BmiForm from './assets/components/BmiForm'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      
    <Header/>
    <BmiForm/>

    </>
  )
}

export default App
