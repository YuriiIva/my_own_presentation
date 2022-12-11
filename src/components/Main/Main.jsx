import  { useState } from 'react'
import { useSpring,animated,config } from 'react-spring';
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { IconContext } from "react-icons";
import s from './Main.module.css'
import { Link } from 'react-router-dom';
import DownloadLink from "react-download-link";
import File from '../../pdf/Summary.pdf'




const Main = () => {
const [flipped, setFlipped] = useState(false)
const {opacity , transform} = useSpring({
  opacity: flipped ? 1 : 0,
  transform: `perspective(100px) rotateX(${flipped? 180 : 0}deg)`,
  config: config.gentle,
})

  return (
   
    <div className={s.main}>
      <div onClick={()=>setFlipped(!flipped)} className={s.anim_cont}>
<animated.div className="imgs back" style={{
  opacity: opacity.interpolate(o => 1 - o),
  transform,
}}/>
<animated.div className="imgs front" style={{
  opacity,
  transform: transform.interpolate(t=>`${t} rotateX(180deg)`)
}}/>
      </div>
    
       {/* <img src={require('../../images/IMG_0830.jpg')}  alt="pic"   className={s.img}/> */}
       <h1 className={s.title}>Ivashchenko Yurii</h1>
       <p>Front-end/Back-end Developer</p>
       <ul className={s.social}>
        <li>
            <a href="https://www.facebook.com/" > 
     <IconContext.Provider value={{ size: '2em', className: s.socal_icon }}>
  <div>
    <AiFillFacebook />
  </div>
</IconContext.Provider>
           </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/feed/">      
    <IconContext.Provider value={{ size: '2em', className: s.socal_icon }}>
  <div><AiFillLinkedin /> </div>
</IconContext.Provider>
                </a></li>
        <li>
            <a href="https://github.com/YuriiIva">
    <IconContext.Provider value={{ size: '2em', className: s.socal_icon }}>
  <div><AiFillGithub /></div>
</IconContext.Provider>
                </a>
        </li>
       </ul>
       
       <Link to="/skills" className={s.btn_li}>Skills</Link>
       <Link to="/projects" className={s.btn_li}>Projects</Link>
       <Link to="/education" className={s.btn_li}>Education</Link>
       <Link to="/experience"className={s.btn_li}>Experience</Link>
    
       <a href="https://drive.google.com/file/d/1ACHDPBU3paemg897VYT5cAt9_CAqAVmu/view?usp=sharing" download className={s.sum_link}>Скачать резюме</a>
       {/* <DownloadLink
    label="Summary"
    filename="Summary.pdf"
    exportFile={() => File} */}
{/* /> */}

        </div>
         
  )

}

export default Main