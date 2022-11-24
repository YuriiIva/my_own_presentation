import { useState } from 'react'
import { Spring, animated } from 'react-spring'
import s from './Skills.module.css'
import {languageSkills, softSkills, techSkills} from '../../data/skills'
import Button from "../../common/Button/Button"
import { AiOutlineCaretDown, AiFillCaretUp } from 'react-icons/ai';



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
    <>
   

    <div className={s.skills}>
      <div className={s.main}>
      <div>
      <h2 className={s.title}>TECH SKILLS</h2>
      <div className={s.btn}>
        <Button btn_name={show?"Hide":"Show"} hendleOnClick={isToggle} />
         {!show? <AiOutlineCaretDown className={s.icon}/>:<AiFillCaretUp className={s.icon}/>}
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
         {!showSoft? <AiOutlineCaretDown className={s.icon}/>:<AiFillCaretUp className={s.icon}/>}
      </div>
     
      {showSoft && <Spring
      from={{opacity:0, transform:"translateY(-4rem)"}}
      to={{opacity:1, transform:"translateY(+1rem}"}}
      config={{duration: 3000}}
      >
        {styles=>(<animated.ul style={styles}>
        {softSkills.map((sof) => (
         <li key={sof} className={s.item}>
          <p> - {sof}</p>
         </li>))}
      </animated.ul>)}
      </Spring>}
      </div>
      <div>
      <h2 className={s.title}>LANGUAGE SKILLS</h2>
      <div className={s.btn}>
         <Button btn_name={showLan?"Hide":"Show"} hendleOnClick={isToggleLan} />
         {!showLan? <AiOutlineCaretDown className={s.icon}/>:<AiFillCaretUp className={s.icon}/>}
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
    {show && showSoft && showLan && <img src="https://static3.depositphotos.com/1003962/196/i/450/depositphotos_1963948-stock-photo-man-and-green-check-mark.jpg" alt="ok"  className={s.img}/>}
    </div>
    
    
    </>
  )
}

export default Skills