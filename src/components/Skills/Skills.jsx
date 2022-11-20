
import { Spring, animated } from 'react-spring'
import s from './Skills.module.css'
import {languageSkills, softSkills, techSkills} from '../../data/skills'

const Skills = () => {
  return (
    <div className={s.main}>
      <div>
      <h2 className={s.title}>TECH SKILLS</h2>
      <Spring
      from={{opacity:0, transform:"translateY(-4rem)"}}
      to={{opacity:1, transform:"translateY(0rem}"}}
      config={{duration: 5000}}
      >
        {styles=>(<animated.ul style={styles}>
        {techSkills.map((t) => (
         <li key={t} className={s.item}>
          <p> - {t}</p>
         </li>))}
      </animated.ul>)}
      </Spring>
      
      </div>

      <div>
      <h2 className={s.title}>SOFT SKILLS</h2>
      <Spring
      from={{opacity:0, transform:"translateY(-4rem)"}}
      to={{opacity:1, transform:"translateY(0rem}"}}
      config={{duration: 5000}}
      >
        {styles=>(<animated.ul style={styles}>
        {softSkills.map((s) => (
         <li key={s} className={s.item}>
          <p> - {s}</p>
         </li>))}
      </animated.ul>)}
      </Spring>
      </div>
      <div>
      <h2 className={s.title}>LANGUAGE SKILLS</h2>
      <Spring
      from={{opacity:0, transform:"translateY(-4rem)"}}
      to={{opacity:1, transform:"translateY(0rem}"}}
      config={{duration: 5000}}
      >
        {styles=>(<animated.ul style={styles}>
        {languageSkills.map((d) => (
         <li key={d} className={s.item}>
          <p> - {d}</p>
         </li>))}
      </animated.ul>)}
      </Spring>
      </div>
    </div>
  )
}

export default Skills