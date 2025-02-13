import React from "react";
import Slider from "react-slick";
import "../styles.scss";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  let data = [
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1716351830071.jpg",
      title: "Limited Time Offer: 0% Making Charge on Gold Jewelry!",
      description:
        "Unlock the ultimate luxury with our exclusive offer - Zero % making charge on all gold jewelry",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1707372270593.jpg",
      title:
        "Unlock the beauty of timeless elegance with our exquisite collection of gold.",
      description:
        "Where luxury meets purity – explore a world of golden treasures.",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1707928731980.jpg",
      title: "Start Your Gold Saving With any budget",
      description:
        "Buy physical gold, silver, platinum, and palladium. build your precious metals savings from any where ,Gold 999.9  starting from 244.33",
    },
  ];

  return (
    <Slider {...settings} >
      {data.map((item, index) => (
        <div key={index}>
          <div
            className="custom-banner"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className="custom-headings">
              <div className="custom-title">
                {item.title.split("elegance")[0]} <br />
                {item.title.split("elegance")[1]}
              </div>

              <div className="custom-description">{item.description}</div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
