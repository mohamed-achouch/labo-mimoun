import React, { useEffect}   from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";

const Contact = () => {

  useEffect(() => {  
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div className=" px-2  sm:px-4 md:px-10 lg:px-20 xl:px-32">
      <div className="my-20 w-full flex items-center justify-between gap-8 md:gap-0 flex-col-reverse md:flex-row ">
        <div>
          <h1 className=" text-custom-secondary text-[18px]   lg:text-[30px] font-semibold">
            Labo maimoun
          </h1>
          <ul className=" flex flex-col gap-2 mt-4">
            <li className=" flex items-center gap-2 ">
              {" "}
              <ImLocation2 className=" lg:text-[22px] text-custom-primary" />{" "}
              <span className=" text-custom-primary text-[14px] md:text-[16px] xl:text-[17px]">
                K.O.M, Lot. Al Wafaa, N° 15, Hay Al Farah, Sect. 4, Salé 11004
              </span>
            </li>
            <li className=" flex items-center gap-2 ">
              <AiTwotoneMail className=" lg:text-[22px] text-custom-primary" />{" "}
              <span className=" text-custom-primary text-[14px] md:text-[16px] xl:text-[17px]">+2125 37 83 12 03</span>
            </li>
            <li className=" flex items-center gap-2 ">
              <FiPhoneCall className=" lg:text-[22px] text-custom-primary" />{" "}
              <span className=" text-custom-primary text-[14px] md:text-[16px] xl:text-[17px]">
                maisonparamed@gmail.com
              </span>
            </li>
          </ul>
        </div>
        <form className=" flex flex-col gap-3 w-full md:w-[50%]">
          <div className="  flex flex-col gap-2 items-start">
            <label
              className=" text-custom-primary text-[15px] lg:text-[16px] after:content-['*'] after:absolute after:-right-3 after:text-custom-third relative"
              htmlFor=""
            >
              Nom Complet
            </label>
            <input
              className=" border border-gray-400 py-2 px-4 focus:border-custom-secondary rounded-md w-full"
              type="text"
              placeholder=" nom et prenom"
            />
          </div>
          <div className="  flex flex-col gap-2 items-start">
            <label
              className=" text-custom-primary text-[15px] lg:text-[16px] after:content-['*'] after:absolute after:-right-3 after:text-custom-third relative"
              htmlFor=""
            >
              Telephone
            </label>
            <input
              className=" border border-gray-400 py-2 px-4 focus:border-custom-secondary rounded-md w-full"
              type="text"
              placeholder="telephone:06xxxxxxxx"
            />
          </div>
          <div className="  flex flex-col gap-2 items-start">
            <label
              className=" text-custom-primary text-[15px] lg:text-[16px] after:content-['*'] after:absolute after:-right-3 after:text-custom-third relative"
              htmlFor=""
            >
              Email
            </label>
            <input
              className="  border border-gray-400 py-2 px-4 focus:border-custom-secondary rounded-md w-full"
              type="email"
              required
              placeholder="adress@gmail.com"
            />
          </div>
          <div className="  flex flex-col gap-2 items-start">
            <label
              className=" text-custom-primary text-[15px] lg:text-[16px] after:content-['*'] after:absolute after:-right-3 after:text-custom-third relative"
              htmlFor=""
            >
              Message{" "}
            </label>
            <textarea
              className=" border border-gray-400 py-2 px-4 focus:border-custom-secondary rounded-md w-full"
              type="email"
              rows={6}
              required
              placeholder="message"
            />
          </div>
          <button
            type="submit"
            className=" bg-custom-secondary  py-2 px-6 rounded-md w-fit text-white"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
