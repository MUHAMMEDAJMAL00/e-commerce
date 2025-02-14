import React from "react";
import "../styles.scss";

const Photosection = () => {
  let data = [
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1709359822230.jpg",
      title:
        "Your budget, your brilliance – experience the allure of gold with zero making charge.",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1709359714729.jpg",
      title:
        "Unlock the beauty of timeless elegance  with our exquisite collection of gold.",
    },
  ];
  return (
    <div className="golds ">
      {data.map((item, index) => (
        <div key={index} className="row  sections ">
          <div
            className="section1 col-md-6 col-lg-6"
            style={{
              backgroundImage: `url(${item.image})`,
             
            }}
          >
            <div className="sectiontitle"> {item.title.split("experience")[0]}<br/>experience{item.title.split("experience")[1]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Photosection;
