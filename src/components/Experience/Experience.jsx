import {useState} from 'react'
import Button from '../../common/Button/Button'
import Modal from '../../common/Modal/Modal'

import s from "./Experience.module.css"

const Experience = () => {
  const [isOpen, setIsOpen] = useState(false)

const isOpenModal=()=>{
  setIsOpen(true)
}

const closeForm=()=>{
  setIsOpen(false)
}

  return (
    <div className={s.exper}>
     <Button btn_name={"Information!!!"} hendleOnClick={isOpenModal}  />
      
      
      <h2 className={s.title}>My experience</h2>
      <ul>
        <li className={s.item}>
        
           <a href="https://yuriiiva.github.io/snake-game-2/" target="_blank" rel="noreferre" className={s.link}>
           <img src={require("../../images/Game-Snake.png" )} alt="" className={s.img}/>
            </a>

        </li>
        <li className={s.item}>
        
        <a href="https://yuriiiva.github.io/Pilpili/" target="_blank" rel="noreferre" className={s.link}>
        <img src={require("../../images/Pilpili.png" )} alt="" className={s.img}/>
         </a>
         
     </li>
     <li className={s.item}>
        
        <a href="https://yuriiiva.github.io/tobe/#123" target="_blank" rel="noreferre" className={s.link}>
        <img src={require("../../images/tobe.png" )} alt="" className={s.img}/>
         </a>
         
     </li>
        </ul>
        
        {isOpen && <Modal closeForm={closeForm} description={<p>
        Hello!
        I didn't work, but..
        I have some of my own projects!
        There are some of them
        </p>}/>}
      
    </div>
  )
}

export default Experience