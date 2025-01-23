import React from 'react'
import Home from "./components/functional_comp/Home"
import About from './components/functional_comp/About'
import Gallery from './components/functional_comp/Gallery'
import Contact from './components/functional_comp/Contact'
import Navbar from './components/functional_comp/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/functional_comp/Signup'
import Login from './components/functional_comp/Login'
import UseState from './components/functional_comp/Hooks/UseState'
import UseEffect from './components/functional_comp/Hooks/UseEffect'
import UseEffectAPI from './components/functional_comp/Hooks/UseEffectAPI'
import UseAPI from './components/functional_comp/Hooks/useapi'
import UseAPIIMG from './components/functional_comp/Hooks/UseAPIIMG'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/gallery' element={<Gallery page="Gallery" img="SECE logo" />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path='/usestate' element={<UseState/>}></Route>
        <Route path="/useEffect" element={<UseEffect/>}></Route>
        <Route path='/useEffectapi' element={<UseEffectAPI/>}></Route>
        <Route path='/useapi' element={<UseAPI/>}></Route>
        <Route path="/useimg" element={<UseAPIIMG/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;