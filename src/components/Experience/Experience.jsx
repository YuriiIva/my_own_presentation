import React from 'react'

import s from "./Experience.module.css"

const Experience = () => {



  return (
    <div className={s.exper}>
      <p>
        Hello!
        I didn't work, but..
        I have some my own projects!
        There some of them
        </p>
      <h2>My experience</h2>
      <ul>
        <li>
        
           <a href="https://github.com/YuriiIva/snake-game-2" target="_blank" rel="noreferre" className={s.link}>
           <img src={require("../../images/Game-Snake.png" )} alt="" className={s.img}/>
            </a>

        </li>
        <li>
        
        <a href="https://github.com/YuriiIva/snake-game-2" target="_blank" rel="noreferre" className={s.link}>
        <img src={require("../../images/PhoneBook.png" )} alt="" className={s.img}/>
         </a>
         
     </li>
        </ul>
      
    </div>
  )
}

export default Experience