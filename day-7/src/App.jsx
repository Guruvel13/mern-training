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
import ReactLifecycleMethods from './components/class_comp/ReactLifecycle'
import UseContext from './components/functional_comp/Hooks/UseContext'
import Memo from './components/functional_comp/Memorization/Memo'
import Storage from './components/functional_comp/Hooks/Custom_Hook/Sample'
import Usecust from './components/functional_comp/Hooks/Custom_Hook/UseLocalStorage'
import HoC from './components/functional_comp/Hoc/HoC'
import Dark from './components/functional_comp/Hooks/Custom_Hook/Darkmode'

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (email, password) => {
    if (email && password) {
      setIsLoggedIn(true);
    }
  };
  return (
    <BrowserRouter>
      {isLoggedIn && <Navbar />} {/* Render Navbar only if logged in */}
      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />} />
        <Route path="/about" element={isLoggedIn ? <About /> : <Login onLogin={handleLogin} />} />
        <Route path="/gallery" element={isLoggedIn ? <Gallery page="Gallery" image="SECE Logo" /> : <Login onLogin={handleLogin} />} />
        <Route path="/contact" element={isLoggedIn ? <Contact /> : <Login onLogin={handleLogin} />} />
        <Route path="/reactlm" element={isLoggedIn ? <ReactLifecycleMethods /> : <Login onLogin={handleLogin} />} />
        <Route path="/useApi" element={isLoggedIn ? <UseEffectAPI /> : <Login onLogin={handleLogin} />} />
        <Route path="/signup" element={isLoggedIn ? <Home /> : <Signup />} />
        <Route path="/login" element={isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />} />
        <Route path="/useState" element={isLoggedIn ? <UseState /> : <Login onLogin={handleLogin} />} />
        <Route path="/useEffect" element={isLoggedIn ? <UseEffect /> : <Login onLogin={handleLogin} />} />
        <Route path="/useimage" element={isLoggedIn ? <UseEffectAPIimage /> : <Login onLogin={handleLogin} />} />
        <Route path="/usereducer" element={isLoggedIn ? <UseReducer /> : <Login onLogin={handleLogin} />} />
        <Route path="/useref" element={isLoggedIn ? <UseRef /> : <Login onLogin={handleLogin} />} />
        <Route path="/usememo" element={isLoggedIn ? <UseMemo /> : <Login onLogin={handleLogin} />} />
        <Route path="/usecallback" element={isLoggedIn ? <UseCallback /> : <Login onLogin={handleLogin} />} />
        <Route path="/reactlifecycle" element={isLoggedIn ? <ReactLifecycleMethods /> : <Login onLogin={handleLogin} />} />
        <Route path="/usecontext" element={isLoggedIn ? <UseContext /> : <Login onLogin={handleLogin} />} />
        <Route path="/memo" element={isLoggedIn ? <Memo /> : <Login onLogin={handleLogin} />} />
        <Route path="/storage" element={isLoggedIn ? <Storage /> : <Login onLogin={handleLogin} />} />
        <Route path="/usecust" element={isLoggedIn ? <Usecust /> : <Login onLogin={handleLogin} />} />
        <Route path="/hoc" element={isLoggedIn ? <HoC /> : <Login onLogin={handleLogin} />} />
        <Route path="/darkmode" element={isLoggedIn ? <Dark /> : <Login onLogin={handleLogin} />} />
        
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
        <Route path='/reactlifecycle' element={<><Navbar /><ReactLifecycleMethods /></>} />
        <Route path='/usecontext' element={<><Navbar /><UseContext /></>} />
        <Route path='/memo' element={<><Navbar /><Memo /></>} />
        <Route path='/storage' element={<><Navbar /><Storage /></>} />
        <Route path='/usecust' element={<><Navbar /><Usecust /></>} />
        <Route path='/hoc' element={<><Navbar /><HoC /></>} />
        <Route path='/darkmode' element={<><Navbar /><Dark /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;