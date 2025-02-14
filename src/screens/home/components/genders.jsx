import React from "react";
import "../styles.scss";
import Slider from "react-slick";

const Genders = () => {
  var settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    arrows:false
  };
  let data = [
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1727683335377.jpg",
      title: "Wedding",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1727683493521.jpg",
      title: "Female",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1727683552031.jpg",
      title: "Men",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1727683605875.jpg",
      title: "Kid",
    },
  ];

  return (
    <Slider {...settings} className="genders">
      {data.map((item, index) => (
        <div className="genders1" key={index}>
          <div
            className="genders2"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="gendertitle">{item.title}</div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Genders;
