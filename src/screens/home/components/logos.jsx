import React from "react";
import Slider from "react-slick";
import "../styles.scss";
import mint from "../../../assets/mint.png";
import states from "../../../assets/states.png";
import pamp from "../../../assets/pamb.png";
import after from "../../../assets/after.jpeg";
import royal from "../../../assets/royal.jpeg";
import south from "../../../assets/south.jpeg";
import emirates from "../../../assets/emirates.jpeg";
import sam from "../../../assets/sam.jpeg";
import  ethihad from "../../../assets/ethihad.jpeg"




const Logos = () => {
  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows:true,
  }

  let data = [
    {
      image: mint,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8f/Valcambi_logo.svg",
    },
    {
      image:
        "https://www.perthmint.com/contentassets/30d16fe6dfe44107ac3f956b8e0bad6e/tpm-logo-125-years.svg",
    },
    {
      image: states,
    },
    {
      image:
        "https://www.emiratesgold.ae/wp-content/uploads/2022/08/header-logo.png",
    },
    {
      image: pamp,
    },
    {
      image: after,
    },
    {
      image: royal,
    },
    {
      image: south,
    },
    {
      image: emirates,
    },
    {
      image:sam,
    },
    {
      image:ethihad
    }
  ];

  return (
    <Slider {...settings} className="logoshead">
      {data.map((item, index) => (
        <div className="logosimagehead " key={index}>
          <div
            className="logoimg "
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
        </div>
      ))}
    </Slider>
  );
};

export default Logos;
