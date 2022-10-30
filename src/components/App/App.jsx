import React from 'react'
import {Route, Routes, Link} from 'react-router-dom'
import Main from '../Main/Main'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import s from './App.module.css'

const App = () => {
  return (
   < >
   <div className={s.app}>
   <Main/>
   <div className={s.right_inf}>
  <header className={s.header}>
<Link to="/skills">Skills</Link>
<Link to="/projects">Projects</Link>
  </header>
<Routes>
<Route path="/skills" element={<Skills/>}/>
<Route path="/projects" element={<Projects/>}/>
</Routes>
</div>
</div>

</>
  )
}

export default App