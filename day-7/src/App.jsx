import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
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
import UseCallback from './components/functional_comp/UseCallback'

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/' || location.pathname === '/sign-up';

  return (
    <BrowserRouter>
      {!hideNavbar && <Navbar />}
      <Routes> 
        <Route path="/sign-up" element={<Signup />} /> 
        <Route path='/login' element={<Login/>}/>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/gallery" element={<Gallery page="Gallery" img="SECE logo" />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path='/usestate' element={<UseState />} /> 
        <Route path="/useEffect" element={<UseEffect />} /> 
        <Route path='/useEffectapi' element={<UseEffectAPI />} /> 
        <Route path='/useapi' element={<UseAPI />} /> 
        <Route path='/usereducer' element={<UseReducer />} /> 
        <Route path="/useimg" element={<UseAPIIMG />} /> 
        <Route path='/useref' element={<UseRef />} /> 
        <Route path='/usememo' element={<UseMemo />} /> 
        <Route path='/usecallback' element={<UseCallback />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;