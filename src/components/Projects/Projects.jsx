import React from 'react'
import s from "./Progects.module.css"

const Projects = () => {
  return (
   
      <ul className={s.container}>
        <li className={s.prog_item}>
          <img src={require("../../images/PRO-Test.png" )} alt="" className={s.img}/>
        <a href="https://github.com/YuriiIva" target="_blank" rel="git" className={s.link}>Git</a>
        <a href="https://pro-test-it-creatives.netlify.app/auth" target="_blank" rel="ProTest" className={s.link_page}>Page</a>
      
        </li>
        <li className={s.prog_item}>
          <img src={require("../../images/Kapusta.png" )} alt="" className={s.img}/>
           <a href="https://github.com/YuriiIva" target="_blank" rel="git" className={s.link}>Git</a>
        <a href="https://brave-brahmagupta-f46148.netlify.app/expense" target="_blank" rel="Kapusta" className={s.link_page}>Page</a>
          </li>
        <li className={s.prog_item}>
          <img src={require("../../images/Cinema-library.png" )} alt="" className={s.img}/>
           <a href="https://github.com/YuriiIva" target="_blank" rel="git" className={s.link}>Git</a>
        <a href="https://yuriiiva.github.io/cinema-library-11-21/" target="_blank" rel="Library" className={s.link_page}>Page</a>
          </li>
        <li className={s.prog_item}>
          <img src={require("../../images/Game-Snake.png" )} alt="" className={s.img}/>
           <a href="https://github.com/YuriiIva" target="_blank" rel="git" className={s.link}>Git</a>
        <a href="https://yuriiiva.github.io/snake-game-2/" target="_blank" rel="Snake" className={s.link_page}>Page</a>
          </li>
        <li className={s.prog_item}>
          <img src={require("../../images/PhoneBook.png" )} alt="" className={s.img}/>
           <a href="https://github.com/YuriiIva" target="_blank" rel="git" className={s.link}>Git</a>
        <a href="https://objective-franklin-5bfb9a.netlify.app/" target="_blank" rel="PhoneBook" className={s.link_page}>Page</a>
          </li>
        <li className={s.prog_item}>
          <img src={require("../../images/find_images.png" )} alt="" className={s.img}/>
           <a href="https://github.com/YuriiIva" target="_blank" rel="git" className={s.link}>Git</a>
        <a href="https://yuriiiva.github.io/goit-react-hw-04-hooks-images/" target="_blank" rel="Images" className={s.link_page}>Page</a>
          </li>
      </ul>
   
  )
}

export default Projects
