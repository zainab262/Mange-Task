import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/common/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import Todo from './components/Pages/Todo'
import { Container } from '@chakra-ui/react'
import Mytodo from './components/Pages/Mytodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/todo" element={<Todo/>}></Route>
        <Route path="/mytodo" element={<Mytodo/>}></Route>


      </Routes>
    </Container>
  )
}

export default App
