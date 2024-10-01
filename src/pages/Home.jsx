import React, { useState } from "react";
import home from "../assets/home.jpg";
import { SlArrowRight } from "react-icons/sl";
import MainTitle from "../components/Titles/MainTitle";
import { LuCalendarDays } from "react-icons/lu";
import Button from "../components/Button/Button";
import { valeurs } from "../utils/db";
import img1 from "../assets/p1.jpg";
import img2 from "../assets/p2.png";
import CarouselModel from "../components/CarouselModel";
import { HiOutlineXMark } from "react-icons/hi2";

const Home = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <section className="">
      <div className="h-[650px] w-full  relative  ">
        <div className=" bg-custom-primary/60 z-10 absolute w-full h-full"></div>
        <img
          src={home}
          alt=""
          className=" z-0 absolute h-full w-full object-fill lg:object-cover"
        />
        <div className=" absolute bottom-[100px] right-0">
          <div className=" z-20 relative   right-0 px-2 sm:px-4 md:px-10 lg:px-20 xl:px-32  flex flex-col gap-6 items-end  justify-end">
            <p className=" text-white bg-custom-primary font-semibold text-[15px] lg:text-[23px] px-8 w-[220px] lg:w-[500px] py-2 lg:py-3">
              Dépannage express
            </p>
            <p className=" text-white bg-custom-secondary font-semibold text-[15px] lg:text-[23px] px-4 w-[200px] lg:w-[400px] py-2 lg:py-3">
              au prix le moins cher
            </p>
            <span
              onClick={() => setShowModel(true)}
              className=" cursor-pointer flex items-center text-white  border-white border-[2px] gap-2 py-2 px-6 rounded-sm"
            >
              <SlArrowRight className=" text[23px] font-bold" /> Découvrez nos
              appareils auditifs
            </span>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-8  mt-5 px-2 sm:px-4 md:px-10 lg:px-20 xl:px-32">
        <div className=" flex flex-col gap-6">
          <MainTitle name="Dépannage express" />
          <p className=" text-custom-primary text-[14px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
            pariatur! Rerum quidem, unde dolores voluptatibus suscipit
            reprehenderit, harum aliquid eum, ullam natus dolorum voluptatum
            minima est id et repellendus maiores! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempora nesciunt fuga culpa
            perspiciatis assumenda debitis perferendis, vitae saepe et illum,
            fugit sequi, dolorum commodi at? Molestias fuga rerum unde? Quia!
          </p>
        </div>
        <div className=" flex flex-col gap-6">
          <MainTitle name="Dépannage express" />
          <p className=" text-custom-primary text-[14px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            dolor <span className=" text-custom-secondary">Adipisci dolor</span>
            , in sunt eius rerum accusantium quas cum saepe ipsum atque,
            incidunt obcaecati ratione recusandae totam est numquam corrupti.
            Neque?
          </p>
          <p className=" text-custom-primary text-[14px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
            pariatur!{" "}
            <span className=" text-custom-secondary">Rerum quidem</span>, unde
            dolores voluptatibus suscipit reprehenderit, harum aliquid eum,
            ullam natus dolorum voluptatum minima est id et repellendus maiores!
          </p>
          <p className=" text-custom-primary text-[14px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
            pariatur! Rerum quidem, unde dolores voluptatibus suscipit
            reprehenderit, harum aliquid eum, ullam natus dolorum voluptatum
            minima est id et repellendus maiores!
          </p>
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className=" text-custom-primary text-[24px] font-semibold">
            Pour un intra-auriculaire
          </h1>
          <div>
            <table class="table-auto border-[1.6px] border-custom-secondary text-custom-primary text-[14px]">
              <thead></thead>
              <tbody>
                <tr>
                  <td className=" py-2 px-4 border-r border-b w-[400px]">
                    Ampli numérique
                  </td>
                  <td className=" py-2 px-4 border-r border-b w-[400px]"></td>
                </tr>
                <tr>
                  <td className=" py-2 px-4 border-r border-b w-[400px]">
                    Micro
                  </td>
                  <td className=" py-2 px-4 border-r border-b w-[400px]"></td>
                </tr>
                <tr>
                  <td className=" py-2 px-4 border-r border-b w-[400px] capitalize">
                    écouteur
                  </td>
                  <td className=" py-2 px-4 border-r border-b w-[400px]"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className=" text-custom-primary text-[24px] font-semibold">
            Pour un contour d'oreille
          </h1>
          <div>
            <table class="table-auto border-[1.6px] border-custom-secondary text-custom-primary text-[14px]">
              <thead></thead>
              <tbody>
                <tr>
                  <td className=" py-2 px-4 border-r border-b w-[400px]">
                    Ampli numérique
                  </td>
                  <td className=" py-2 px-4 border-r border-b w-[400px]"></td>
                </tr>
                <tr>
                  <td className=" py-2 px-4 border-r border-b w-[400px]">
                    Micro
                  </td>
                  <td className=" py-2 px-4 border-r border-b w-[400px]"></td>
                </tr>
                <tr>
                  <td className=" py-2 px-4 border-r border-b w-[400px] capitalize">
                    écouteur
                  </td>
                  <td className=" py-2 px-4 border-r border-b w-[400px]"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h1 className=" text-custom-primary font-bold">
          Un devis vous est systématiquement remis avant la réparation.
        </h1>
        <div>
          <p className=" text-custom-primary text-[14px]">*nom remboursé</p>

          <p className=" text-custom-primary text-[14px]">
            **en partie remboursé par la sésu et votre mutuelle
          </p>
        </div>
      </div>
      <div className=" mt-6 bg-custom-primary text-white py-12 px-2  sm:px-4 md:px-10 lg:px-20 xl:px-32">
        <div className=" flex-col md:flex-row flex justify-between gap-4  items-center">
          <h1 className=" text-center md:text-start text-[20px]  font-medium">
            Prenez rendez-vous <br /> pour un bilan auditif gratuit
          </h1>
          <Button
            lien="/contact-us"
            icon={<LuCalendarDays />}
            rounded="rounded-sm"
            title="Prendre rendez-vous"
            color="bg-custom-secondary"
          />
        </div>
      </div>
      <div className=" my-[100px]  gap-[20px]  px-2  sm:px-4 md:px-10 lg:px-20 xl:px-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {valeurs.map((serv) => (
          <div className=" shadow py-4 px-2 flex  flex-col gap-2 items-center">
            <img
              className=" rounded-md object-fill w-[40px] h-[40px] md:h-[60px] md:w-[60px] lg:w-[70px] lg:h-[70px]"
              src={serv.image}
              alt={serv.name}
            />
            <h1 className=" text-center   text-[14px] text-custom-primary font-bold">
              {serv.name}
            </h1>
            <p className=" text-custom-primary/80 text-[14px] text-center font-semibold">
              {serv.desc}
            </p>
          </div>
        ))}
      </div>
      <div className=" px-2  sm:px-4 md:px-10 lg:px-20 xl:px-32">
        <h1 className=' m-auto w-fit text-custom-primary text-[20px] font-semibold relative before:content-[""] before:absolute before:-bottom-2 before:top-[40px] before:right-0 before:left-0 before:m-auto before:h-1 before:w-[120px] before:bg-custom-secondary'>
          Nos Marques Partenaires
        </h1>
        <div className=" mt-[60px] flex justify-around items-center gap-10 flex-col md:flex-row">
          <img
            src={img1}
            alt=""
            className=" w-[100px] md:w-[150px] lg:w-[220px]"
          />
          <img
            src={img2}
            alt=""
            className=" w-[100px] md:w-[150px] lg:w-[220px]"
          />
        </div>
      </div>

      <div
        className={` fixed top-0 left-0 w-full h-full duration-200 transition-all  z-40 bg-black/85 ${
          showModel ? "scale-100" : "scale-0"
        }`}
      >
        <HiOutlineXMark className=" text-[24px] text-red-500 cursor-pointer absolute right-4 top-4" onClick={()=> setShowModel(false)}/>
        <CarouselModel />
      </div>
    </section>
  );
};

export default Home;
