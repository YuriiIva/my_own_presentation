import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { GiLinkedRings } from 'react-icons/gi';
import { IconContext } from "react-icons";
import s from "./Progects.module.css"

const Projects = () => {
  return (
      <ul className={s.container}>

        <li className={s.prog_item}>
          <h1 className={s.title}>PRO-Test</h1>
          <img src={require("../../images/PRO-Test.png" )} alt="" className={s.img}/>
        <a href="https://github.com/AnnaSobchenko/pro-test" target="_blank" rel="git" className={s.link}>
          <IconContext.Provider value={{ size: '2em', className: "icons" }}>
        <div>
          <AiFillGithub />
        </div>
         </IconContext.Provider>
         </a>
        <a href="https://pro-test-it-creatives.netlify.app/auth" target="_blank" rel="ProTest" className={s.link_page}>
          
          <IconContext.Provider value={{ size: '2em', className: "icons" }}>
        <div>
          <GiLinkedRings />
        </div>
         </IconContext.Provider>
          </a>
        </li>

        <li className={s.prog_item}>
        <h1 className={s.title}>Kapusta</h1>
          <img src={require("../../images/Kapusta.png" )} alt="" className={s.img}/>
           <a href="https://github.com/YelyzavetaLukianova/Money-project-react" target="_blank" rel="git" className={s.link}>
           <IconContext.Provider value={{ size: '2em', className: "icons" }}>
        <div>
          <AiFillGithub />
        </div>
         </IconContext.Provider>
            </a>
        <a href="https://brave-brahmagupta-f46148.netlify.app/expense" target="_blank" rel="Kapusta" className={s.link_page}>
        <IconContext.Provider value={{ size: '2em', className: "icons" }}>
        <div>
          <GiLinkedRings />
        </div>
         </IconContext.Provider>
          </a>
          </li>

        <li className={s.prog_item}>
        <h1 className={s.title}>Cinema-library</h1>
          <img src={require("../../images/Cinema-library.png" )} alt="" className={s.img}/>
           <a href="https://github.com/YuriiIva/cinema-library-11-21" target="_blank" rel="git" className={s.link}>
           <IconContext.Provider value={{ size: '2em', className: "icons" }}>
        <div>
          <AiFillGithub />
        </div>
         </IconContext.Provider>
            </a>
        <a href="https://yuriiiva.github.io/cinema-library-11-21/" target="_blank" rel="Library" className={s.link_page}>
        <IconContext.Provider value={{ size: '2em', className: "icons" }}>
        <div>
          <GiLinkedRings />
        </div>
         </IconContext.Provider>
          </a>
          </li>

        <li className={s.prog_item}>
        <h1 className={s.title}>Game Snake</h1>
          <img src={require("../../images/Game-Snake.png" )} alt="" className={s.img}/>
           <a href="https://github.com/YuriiIva/snake-game-2" target="_blank" rel="git" className={s.link}>
           <IconContext.Provider value={{ size: '2em', className: "icons" }}>
        <div>
          <AiFillGithub />
        </div>
         </IconContext.Provider>
            </a>
        <a href="https://yuriiiva.github.io/snake-game-2/" target="_blank" rel="Snake" className={s.link_page}>
        <IconContext.Provider value={{ size: '2em', className: "icons" }}>
        <div>
          <GiLinkedRings />
        </div>
         </IconContext.Provider>
          </a>
          </li>

        <li className={s.prog_item}>
        <h1 className={s.title}>PhoneBook</h1>
          <img src={require("../../images/PhoneBook.png" )} alt="" className={s.img}/>
           <a href="https://github.com/YuriiIva/goit-react-hw-08-phonebook" target="_blank" rel="git" className={s.link}>
           <IconContext.Provider value={{ size: '2em', className: "icons" }}>
        <div>
          <AiFillGithub />
        </div>
         </IconContext.Provider>
            </a>
        <a href="https://objective-franklin-5bfb9a.netlify.app/" target="_blank" rel="PhoneBook" className={s.link_page}>
        <IconContext.Provider value={{ size: '2em', className: "icons" }}>
        <div>
          <GiLinkedRings />
        </div>
         </IconContext.Provider>
          </a>
          </li>

        <li className={s.prog_item}>
        <h1 className={s.title}>Find images</h1>
          <img src={require("../../images/find_images.png" )} alt="" className={s.img}/>
           <a href="https://github.com/YuriiIva/goit-react-hw-03-image-finder" target="_blank" rel="git" className={s.link}>
           <IconContext.Provider value={{ size: '2em', className: "icons" }}>
        <div>
          <AiFillGithub />
        </div>
         </IconContext.Provider>
            </a>

        <a href="https://yuriiiva.github.io/goit-react-hw-04-hooks-images/" target="_blank" rel="Images" className={s.link_page}>
        <IconContext.Provider value={{ size: '2em', className: "icons" }}>
        <div>
          <GiLinkedRings />
        </div>
         </IconContext.Provider>
          </a>
          </li>
      </ul>
   
  )
}

export default Projects
