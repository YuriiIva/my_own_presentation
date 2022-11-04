import React from 'react'
import s from "./Button.module.css"

const Button = ({btn_name}) => {
  return (
   <button type='button' className={s.btn}>
{btn_name}
        </button>
       
  )
}

export default Button