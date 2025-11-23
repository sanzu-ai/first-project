import React from 'react'
import NavBar from './components/NavBAr'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Login from './components/Login'

// import Login from "./components/Login"

const App = () => {
  return (
    <>
    {/* <Login/> */}
    <NavBar />
    <Routes>
    <Route path = '/' element = {<Home />} />
    <Route path = '/about' element = {<About />} />
    <Route path = '/blog' element = {<Blog />} />
    <Route path = '/contact' element = {<Contact />} />
    <Route path = '/login' element = {<Login/>} />
    </Routes>
    </>
  )
}

export default App
