import React from 'react'
import logo from "../assets/logo.png"
import { FaFacebook,FaYoutube,FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' py-[40px] mt-[100px]  items-center justify-between flex-col gap-6 flex md:flex-row   px-2  sm:px-4 md:px-10 lg:px-20 xl:px-32 bg-custom-primary text-white'>
      <div className='  relative w-[100px] md:w-[150px] xl:[250px]'>
        <img src={logo} alt="" />
      </div>
      <ul className=' w-fit flex items-center flex-col text-[14px] gap-2'>
        <li><a href="/contact-us" className=' duration-200 transition-all hover:text-custom-secondary'>Nous Contacter</a></li>
        <li>Mestions légales </li>
        <li>Condition Générales de Vente</li>
      </ul>
      <ul className=' flex gap-5 w-fit lg: xl:text-[26px]'  >
      <li> <a href="/"><FaFacebook  className=' duration-200 transition-all hover:text-custom-secondary cur'/></a></li>
      <li> <a href="/"><FaYoutube  className=' duration-200 transition-all hover:text-custom-secondary cur'/></a></li>
      <li> <a href="/"><FaLinkedin  className=' duration-200 transition-all hover:text-custom-secondary cur'/></a></li>

      </ul>
    </div>
  )
}

export default Footer