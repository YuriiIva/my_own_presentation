import React from 'react'
import s from "./Button.module.css"

const Button = ({btn_name, hendleOnClick}) => {
  return (
   <button 
   type='button' 
   className={s.btn}
   onClick={hendleOnClick}
   >
{btn_name}
        </button>
       
  )
}

export default Button