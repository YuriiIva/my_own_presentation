import {useState} from 'react'
import Button from '../../common/Button/Button'
import s from "./Education.module.css"

const Education = () => {
  const [isOpenIt, setIsOpenIt] = useState(false)
  const [isOpenGen, setIsOpenGen] = useState(false)

const isOpen = (e)=>{
  switch (e.target.name) {
    case "In IT":
      setIsOpenIt(!isOpenIt)
     return;
     case "General":
      setIsOpenGen(!isOpenGen)
     return;
  
    default:
      break;
  }
  // setIsOpenIt(!isOpenIt)
}

  return (
   <>
    <div className={s.main}>
    <div className={s.edIT}>
    <button type='button' className={s.btn} name="In IT" onClick={isOpen}>In IT</button>
    {isOpenIt && <h2 className={s.title}>
      Courses
      <p>
      - GoIT Academy Bootcamp 2021:<pre>
        Full Stack Developer
        </pre>
      </p>
       
        </h2> }
    </div>
    <div className={s.edIT}>
       <button  type='button' className={s.btn} name="General" onClick={isOpen}>General</button>
    {isOpenGen && <h2 className={s.title}>
    Sumy State University 2003-2005: 
    <pre>speciality -Electronic</pre>
    </h2> }
    </div>
  
   

    </div>
   
    
    </>
  )
}

export default Education