import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
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

  </header>
<Routes>
<Route path="/skills" element={<Skills/>}/>
<Route path="/projects" element={<Projects/>}/>
<Route path="/Education" element={<Education/>}/>
<Route path="/Experience" element={<Experience/>}/>
</Routes>
</div>
</div>

</>
  )
}

export default App