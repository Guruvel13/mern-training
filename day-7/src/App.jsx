import React from 'react'

import Home from "./components/functional_comp/Home"
import About from './components/functional_comp/About'
import Classcomponent from './components/class_comp/classComponent'
import Gallery from './components/functional_comp/Gallery'
import Contact from './components/functional_comp/Contact'

function App() {
  return (
    <section>
      <Home />
      <About />
      <Classcomponent />
      <Gallery page="SECE" img="SECE logo" />
      <Contact />
    </section>
  )
}

export default App