import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from "./components/functional_comp/Home"
import About from './components/functional_comp/About'
import Gallery from './components/functional_comp/Gallery'
import Contact from './components/functional_comp/Contact'
import Navbar from './components/functional_comp/Navbar'
import Signup from './components/functional_comp/Signup'
import Login from './components/functional_comp/Login'
import UseState from './components/functional_comp/hooks/UseState'
import UseEffect from './components/functional_comp/hooks/UseEffect'
import UseEffectAPI from './components/functional_comp/hooks/UseEffectAPI'
import UseAPI from './components/functional_comp/hooks/UseAPI'
import UseAPIIMG from './components/functional_comp/hooks/UseAPIIMG'
import UseReducer from './components/functional_comp/hooks/UseReducer'
import UseRef from './components/functional_comp/hooks/UseRef'
import UseMemo from './components/functional_comp/hooks/UseMemo'
import UseCallback from './components/functional_comp/hooks/UseCallback'
// import ReactLifecycle from './components/class_comp/ReactLifecycle'

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/sign-up';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/gallery' element={<Gallery page="Gallery" img="SECE logo" />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path='/usestate' element={<UseState/>}></Route>
        <Route path="/useEffect" element={<UseEffect/>}></Route>
        <Route path='/useEffectapi' element={<UseEffectAPI/>}></Route>
        <Route path='/useapi' element={<UseAPI/>}></Route>
        <Route path='/usereducer' element={<UseReducer/>}></Route>
        <Route path="/useimg" element={<UseAPIIMG/>}></Route>
        <Route path='/useref' element={<UseRef/>}></Route>
        <Route path='/usememo' element={<UseMemo/>}></Route>
        <Route path='/usecallback' element={<UseCallback/>}></Route>
        {/* <Route path='/reactlifecycle' element={<ReactLifecycle/>}></Route> */}
      </Routes>
    </>
  );
}

export default App;