import React from "react";
import "../styles.scss";
import Slider from "react-slick";

const Goldinformation = () => {
  var settings = {
    infinite: true,
    speed: 900,
    slidesToShow:3.5,
    slidesToScroll: 2,
    autoplay: true,

  };

  let data = [
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1727682061528.jpg",
      title: "Exclusive Gold Bar Offers",
      description: "Bullion Vault Deals",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1727682163964.jpg",
      title: "Exclusive Gold Bar Offers",
      description: "Bullion Vault Deals",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1727682278816.jpg",
      title: "Coin Deals Extravaganza",
      description: "Bullion Vault Deals",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1727682199207.jpg",
      title: "Exclusive Gold Bar Offers",
      description: "Bullion Vault Deals",
    },
  ];
  return (
    <Slider {...settings }  className="slick-sliders">
        

      {data.map((item, index) => (
        <div key={index} className="exclusiv1">
            <div
              className="exclusivegold"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="exclusivetitle">{item.title}</div>
              <div className="exclusivedesc">{item.description}</div>
            </div>
          </div>
      ))}
    </Slider>
  );
};

export default Goldinformation;
