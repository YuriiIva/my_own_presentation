import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

import s from './Main.module.css'

const Main = () => {
  return (
    <div className={s.main}>
       <img src="../../images/IMG_0830.jpg" alt=""  width={50} height={50}/>
       <h1>Ivashchenko Yurii</h1>
       <p>Front-end/Back-end Developer</p>
       <ul className={s.social}>
        <li>
            <a href="https://www.facebook.com/"><AiFillFacebook/></a>
        </li>
        <li>
            <a href="https://www.linkedin.com/feed/"><AiFillLinkedin/></a></li>
        <li>
            <a href="https://github.com/YuriiIva"><AiFillGithub/></a>
        </li>
       </ul>
       <ul>
        <li>
            <button type='button'>Education</button>     
        </li>
        <li>
        <button type='button'>Own projects</button>
        </li>
        <li>
        <button type='button'>Work experience</button>
        </li>
       </ul>
       <ul>
        <li><a download="" href="../../images/Summary Ivashchenko Yurii.pdf">loading</a></li>
       </ul>
        </div>
  )
}

export default Main