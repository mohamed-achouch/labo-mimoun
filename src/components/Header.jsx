import React, { useState } from "react";
import logo from "../assets/logo.png";
import { CgSearch } from "react-icons/cg";
import { LuCalendarDays } from "react-icons/lu";
import Button from "./Button/Button";
import { TfiMenu } from "react-icons/tfi";
import { FiBookOpen } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const [showMenu , setShowMenu] = useState(false)
  return (
    <div>
      <header className="shadow-md z-30  px-2 sm:px-4 md:px-10 lg:px-20 xl:px-32 flex items-center fixed left-0 w-full justify-between bg-white h-[100px]">
        <div className="w-[90px] h-[60px] md:w-[100px] md:h-[70px] lg:w-[120px] lg:h-[80px] xl:w-[160px] xl:h-[100px]   relative">
          <a href="/">
            <img
              src={logo}
              alt=""
              className=" object-fill h-full w-full absolute"
            />
          </a>
        </div>
       {
        !showMenu  ?  <TfiMenu onClick={ ()=> setShowMenu(true)} className=" lg:hidden cursor-pointer text-[20px] md:text-[25px] xl:text-[30px] text-custom-primary" /> :  <FaXmark onClick={ ()=> setShowMenu(false)} className=" lg:hidden cursor-pointer text-[20px] md:text-[25px] xl:text-[30px] text-custom-primary" />
       } 
       

        <ul className="  items-center justify-between gap-10 hidden lg:flex">
          <li className=' text-custom-primary font-semibold ml-5 text-[14px] hover:text-custom-third before:content-[""] relative before:absolute before:h-1 hover:before:w-full before:duration-200 before:transition-all before:w-0 before:bg-custom-third before: left-0 before:-bottom-2  duration-200 transition-all'>
            <a href="/">VOS QUESTION</a>
          </li>
          <li className=' text-custom-primary font-semibold ml-5 text-[14px] hover:text-custom-third before:content-[""] relative before:absolute before:h-1 hover:before:w-full before:duration-200 before:transition-all before:w-0 before:bg-custom-third before: left-0 before:-bottom-2  duration-200 transition-all'>
            <a href="/">BOUTIQUE EN LIGNE</a>
          </li>
          <li className=" relative flex items-center justify-between">
            {" "}
            <CgSearch className=" absolute left-0" />{" "}
            <input
              type="text"
              placeholder="recherche"
              className="placeholder:text-custom-primary  capitalize text-center text-[13px] text-custom-primary  outline-none border-b border-custom-primary"
            />
          </li>
          <li className="flex items-center justify-center flex-col ">
            <span className=" text-[15px] font-bold">05 67 65 43 23</span>{" "}
            <span className=" text-custom-secondary text-[14px] font">
              service client
            </span>
          </li>
        </ul>
        <ul className=" absolute right-32 -bottom-[24px]  items-end gap-4  hidden lg:flex">     
          <li>   
            <Button            
              lien="/contact-us"
              icon={<LuCalendarDays className=" text-[24px]" />}
              title=" prendre rendez vous"
              color="bg-custom-third"
            />
          </li>
          <li >
            <Button
              lien=""
              icon={<FiBookOpen className=" text-[24px]" />}
              title=" demende de brochure"
              color="bg-custom-primary"
            />
          </li>
        </ul>
      </header>
      {/* Mobile device */}
    {
    <div className={` ${showMenu ? 'h-[650px] pt-8' : 'h-0 overflow-hidden pt-0'}   duration-200 transition-all fixed   top-[100px] bg-white z-40  left-0 w-full `}>
      <ul className="  items-center justify-between gap-6 flex flex-col">
        <li className=' text-custom-primary font-semibold ml-5 text-[14px] hover:text-custom-third before:content-[""] relative before:absolute before:h-1 hover:before:w-full before:duration-200 before:transition-all before:w-0 before:bg-custom-third before: left-0 before:-bottom-2  duration-200 transition-all'>
          <a href="/">VOS QUESTION</a>
        </li>
        <li className=' text-custom-primary font-semibold ml-5 text-[14px] hover:text-custom-third before:content-[""] relative before:absolute before:h-1 hover:before:w-full before:duration-200 before:transition-all before:w-0 before:bg-custom-third before: left-0 before:-bottom-2  duration-200 transition-all'>
          <a href="/">BOUTIQUE EN LIGNE</a>
        </li>

        <li onClick={ ()=> setShowMenu(false)}>
          <Button
            
            lien="/contact-us"
            icon={<LuCalendarDays className=" text-[24px]" />}
            title=" prendre rendez vous"
            color="bg-custom-third"
          />
        </li>
        <li onClick={ ()=> setShowMenu(false)}>
          <Button
            
            lien=""
            icon={<FiBookOpen className=" text-[24px]" />}
            title=" demende de brochure"
            color="bg-custom-primary"
          />
        </li>
      </ul>
    </div>
    }
    </div>
  );
};

export default Header;
