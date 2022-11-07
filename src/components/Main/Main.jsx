// import  { useState } from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { IconContext } from "react-icons";
// import Button from '../../common/Button/Button'
import s from './Main.module.css'
// import Modal from '../../common/Modal/Modal';


import { Link } from 'react-router-dom';
import DownloadLink from "react-download-link";
import File from '../../pdf/Summary.pdf'


const Main = () => {


  return (
   
    <div className={s.main}>
    
       <img src={require('../../images/IMG_0830.jpg')}  alt="pic"   className={s.img}/>
       <h1>Ivashchenko Yurii</h1>
       <p>Front-end/Back-end Developer</p>
       <ul className={s.social}>
        <li>
            <a href="https://www.facebook.com/" > 
     <IconContext.Provider value={{  className: s.socal_icon }}>
  <div>
    <AiFillFacebook />
  </div>
</IconContext.Provider>
           </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/feed/">      
    <IconContext.Provider value={{  className: s.socal_icon }}>
  <div><AiFillLinkedin /> </div>
</IconContext.Provider>
                </a></li>
        <li>
            <a href="https://github.com/YuriiIva">
    <IconContext.Provider value={{  className: s.socal_icon }}>
  <div><AiFillGithub /></div>
</IconContext.Provider>
                </a>
        </li>
       </ul>
       
       <Link to="/skills" className={s.btn_li}>Skills</Link>
       <Link to="/projects" className={s.btn_li}>Projects</Link>
       <Link to="/education" className={s.btn_li}>Education</Link>
       <Link to="/experience"className={s.btn_li}>Experience</Link>
    
       {/* <ul>
        <li><a href="../../pdf/Summary_Ivashchenko_Yurii.pdf" download>loading</a></li>
       </ul> */}
       <DownloadLink
    label="Save me"
    filename="Summary.pdf"
    exportFile={() => File}
/>
     
        </div>
         
  )

}

export default Main