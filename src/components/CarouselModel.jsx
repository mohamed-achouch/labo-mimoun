import React from "react";
import r1 from "../assets/r1.mp4";
import r2 from "../assets/r2.mp4";
import home from "../assets/home.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
const CarouselModel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const carouselList = [
    {
      id: 1,
      src: r1,
    },
    {
      id: 2,
      src: r2,
    },
    {
      id: 3,
      src: home,
    },
  ];

  const isVideo = (src) => {
    const videoExtensions = ["mp4", "webm", "ogg"]; // Common video extensions
    const extension = src.split(".").pop().toLowerCase(); // Get file extension from the src
    return videoExtensions.includes(extension); // Check if it's a video extension
  };
  return (
    <div className="absolute  w-[90%] lg:w-[70%] h-[70%] top-0 bottom-0 left-0 right-0 m-auto">
      <Slider {...settings}>
        {carouselList?.map((item, index) => (
          <div className="content">
            {" "}
            {isVideo(item.src) ? (
             <div >
               <Video
             
                controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
                poster={home}
                onCanPlayThrough={() => {
                  // Do stuff
                }}
              >
                <source
                  src={item.src}
                  type={`video/${item.src.split(".").pop()}`}
                />
                <track
                  label="English"
                  kind="subtitles"
                  srcLang="en"
                  src="http://source.vtt"
                  default
                />
              </Video> </div>
            ) : (
              <img src={item.src} alt="media" className=" w-full h-full" />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselModel;
