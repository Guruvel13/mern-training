import React from 'react'
import Home from "./components/functional_comp/Home"
import About from './components/functional_comp/About'
import ClassComponent from './components/class_comp/ClassComponent'
import Gallery from './components/functional_comp/Gallery'
import Contact from './components/functional_comp/Contact'
import Navbar from './components/functional_comp/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes> 
        <Route path='/' element={<Home/>}></Route> 
        <Route path='/about' element={<About/>}></Route>
        <Route path='/gallery' element={<Gallery page="Gallery" img="SECE logo"/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/classcomponent' element={<ClassComponent/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;