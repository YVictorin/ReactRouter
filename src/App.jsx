import { Route, Routes } from 'react-router-dom'
import  Navbar  from './components/Navbar' 

import './global.css'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/contact" element={<h1>Contact Us</h1>} />
    </Routes>
    </>
  )
}

export default App
