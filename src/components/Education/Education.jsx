import {useState} from 'react'

import s from "./Education.module.css"

const Education = () => {
  const [isOpenIt, setIsOpenIt] = useState(false)
  const [isOpenGen, setIsOpenGen] = useState(false)

const isOpen = (e)=>{
  switch (e.target.name) {
    case "IT":
      setIsOpenIt(!isOpenIt)
     return;
     case "General":
      setIsOpenGen(!isOpenGen)
     return;
  
    default:
      break;
  }
  
}

  return (
   <>
    <div className={s.main}>
    <div className={s.edIT}>
    <button type='button' className={s.btn} name="IT" onClick={isOpen}>IT</button>
    {isOpenIt && <div className={s.title}>
         <h2 >
      Courses:
   </h2>
   <ol className={s.item}>
    <li>GoIT Academy Bootcamp 2021:<pre>
        Full Stack Developer
        </pre></li>
        <li>Google</li>
   </ol>
       </div>
         }
    </div>
    <div className={s.edIT}>
       <button  type='button' className={s.btn} name="General" onClick={isOpen}>General</button>
    {isOpenGen && <div className={s.title}>
      <h2>General Education: </h2>
      <ol className={s.item}>
        <li> Sumy State University 2003-2005: 
    <pre>Speciality - Electronic</pre>
    </li>
      </ol>
    </div> }
    </div>
  
   

    </div>
   
    
    </>
  )
}

export default Education