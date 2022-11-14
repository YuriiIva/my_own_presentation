import React from 'react'
import s from "./Progects.module.css"

const Projects = () => {
  return (
   
      <ul className={s.container}>
        <li className={s.prog_item}><img src={require("../../images/PRO-Test.png" )} alt="" className={s.img}/></li>
        <li className={s.prog_item}><img src={require("../../images/Kapusta.png" )} alt="" className={s.img}/></li>
        <li className={s.prog_item}><img src={require("../../images/Cinema-library.png" )} alt="" className={s.img}/></li>
        <li className={s.prog_item}><img src={require("../../images/Game-Snake.png" )} alt="" className={s.img}/></li>
        <li className={s.prog_item}><img src={require("../../images/PhoneBook.png" )} alt="" className={s.img}/></li>
        <li className={s.prog_item}><img src={require("../../images/find_images.png" )} alt="" className={s.img}/></li>
      </ul>
   
  )
}

export default Projects
