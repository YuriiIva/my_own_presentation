import { useState } from 'react'
import { Spring, animated } from 'react-spring'
import s from './Skills.module.css'
import {languageSkills, softSkills, techSkills} from '../../data/skills'
import Button from "../../common/Button/Button"


const Skills = () => {
  const [show, setShow] = useState(false)
  const [showSoft, setShowSoft] = useState(false)
  const [showLan, setShowLan] = useState(false)

  const isToggle = ()=> {
    setShow(!show)
  }
  const isToggleSoft = ()=> {
    setShowSoft(!showSoft)
  }

  const isToggleLan = ()=> {
    setShowLan(!showLan)
  }


  return (
    <div className={s.main}>
      <div>
      <h2 className={s.title}>TECH SKILLS</h2>
      <div className={s.btn}>
        <Button btn_name={show?"Hide":"Show"} hendleOnClick={isToggle} />
      </div>
      {show && <Spring
      from={{opacity:0, transform:"translateY(-4rem)"}}
      to={{opacity:1, transform:"translateY(+1rem}"}}
      config={{duration: 3000}}
      >
        {styles=>(<animated.ul style={styles}>
        {techSkills.map((t) => (
         <li key={t} className={s.item}>
          <p> - {t}</p>
         </li>))}
      </animated.ul>)}
      </Spring>}
      
      </div>

      <div>
      <h2 className={s.title}>SOFT SKILLS</h2>
      <div className={s.btn}>
         <Button btn_name={showSoft?"Hide":"Show"} hendleOnClick={isToggleSoft} />
      </div>
     
      {showSoft && <Spring
      from={{opacity:0, transform:"translateY(-4rem)"}}
      to={{opacity:1, transform:"translateY(+1rem}"}}
      config={{duration: 3000}}
      >
        {styles=>(<animated.ul style={styles}>
        {softSkills.map((s) => (
         <li key={s} className={s.item}>
          <p> - {s}</p>
         </li>))}
      </animated.ul>)}
      </Spring>}
      </div>
      <div>
      <h2 className={s.title}>LANGUAGE SKILLS</h2>
      <div className={s.btn}>
         <Button btn_name={showLan?"Hide":"Show"} hendleOnClick={isToggleLan} />
      </div>
     
     {showLan && <Spring
      from={{opacity:0, transform:"translateY(-4rem)"}}
      to={{opacity:1, transform:"translateY(+1rem}"}}
      config={{duration: 3000}}
      >
        {styles=>(<animated.ul style={styles}>
        {languageSkills.map((d) => (
         <li key={d} className={s.item}>
          <p> - {d}</p>
         </li>))}
      </animated.ul>)}
      </Spring>}
      </div>
    </div>
  )
}

export default Skills