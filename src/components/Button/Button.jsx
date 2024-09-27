import React from 'react'
import { Link } from 'react-router-dom';
const Button = ({icon , title , color, rounded, lien}) => {
    console.log(color);
    
  return (
    <Link  to={lien} className={` ${rounded ? rounded : "rounded-full"}  flex items-center justify-center py-2  px-4 text-white uppercase text-[13px] font-medium gap-2  ${color}`}>{icon}{title}</Link>
  )
}

export default Button