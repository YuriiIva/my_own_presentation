import  { useState } from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { IconContext } from "react-icons";
import Button from '../../common/Button/Button'
import s from './Main.module.css'
import Modal from '../../common/Modal/Modal';


const Main = () => {
const [isOpenForm, setisOpenForm] = useState(false);

    const hendleOnClick=()=>{
        setisOpenForm(true)
       console.log('closeForm', isOpenForm)
    }
const closeForm=()=>{
    setisOpenForm(false)
}

  return (
    <>
    <div className={s.main}>
       <img src="../../images/IMG_0830.jpg" alt="pic"  width={150} height={150}/>
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
       <ul className={s.button_inf}>
        <li className={s.btn_li}>
            <Button 
            btn_name = 'Education'
            hendleOnClick={hendleOnClick}
            />
        </li>
        <li className={s.btn_li}>
        <Button 
        btn_name = 'Own projects'
        hendleOnClick={hendleOnClick} />
        </li>
        <li className={s.btn_li}>
        <Button 
        btn_name = 'Experience'
        hendleOnClick={hendleOnClick}/>
        </li>
       </ul>
       <ul>
        <li><a download="" href="../../images/Summary Ivashchenko Yurii.pdf">loading</a></li>
       </ul>
        </div>
          {  isOpenForm && <Modal closeForm={closeForm}/>}
          </>
  )

}

export default Main