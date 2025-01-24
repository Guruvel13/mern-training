import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/functional_comp/Home"
import About from './components/functional_comp/About'
import Gallery from './components/functional_comp/Gallery'
import Contact from './components/functional_comp/Contact'
import Navbar from './components/functional_comp/Navbar'
import Signup from './components/functional_comp/Signup'
import Login from './components/functional_comp/Login'
import UseState from './components/functional_comp/Hooks/UseState'
import UseEffect from './components/functional_comp/Hooks/UseEffect'
import UseEffectAPI from './components/functional_comp/Hooks/UseEffectAPI'
import UseAPI from './components/functional_comp/Hooks/UseAPI'
import UseAPIIMG from './components/functional_comp/Hooks/UseAPIIMG'
import UseReducer from './components/functional_comp/Hooks/UseReducer'
import UseRef from './components/functional_comp/Hooks/UseRef'
import UseMemo from './components/functional_comp/Hooks/UseMemo'
import UseCallback from './components/functional_comp/Hooks/UseCallback'

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/sign-up" element={<Signup />} /> 
        <Route path="/" element={<><Navbar /><Home /></>} /> 
        <Route path="/about" element={<><Navbar /><About /></>} /> 
        <Route path="/gallery" element={<><Navbar /><Gallery page="Gallery" img="SECE logo" /></>} /> 
        <Route path="/contact" element={<><Navbar /><Contact /></>} /> 
        <Route path='/usestate' element={<><Navbar /><UseState /></>} /> 
        <Route path="/useEffect" element={<><Navbar /><UseEffect /></>} /> 
        <Route path='/useEffectapi' element={<><Navbar /><UseEffectAPI /></>} /> 
        <Route path='/useapi' element={<><Navbar /><UseAPI /></>} /> 
        <Route path='/usereducer' element={<><Navbar /><UseReducer /></>} /> 
        <Route path="/useimg" element={<><Navbar /><UseAPIIMG /></>} /> 
        <Route path='/useref' element={<><Navbar /><UseRef /></>} /> 
        <Route path='/usememo' element={<><Navbar /><UseMemo /></>} /> 
        <Route path='/usecallback' element={<><Navbar /><UseCallback /></>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;