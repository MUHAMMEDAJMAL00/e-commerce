import React from "react";
import "../styles.scss";
import Slider from "react-slick";

const TopProducts = () => {
  var settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    arrow: false,
    autoplay: true,
  };

  let data = [
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1734535273209.jpg",
      title: "LSGER0022",
      stocks: "Out of stock",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1734534935422.jpg",
      title: "LSGER0021",
      stocks: "Out of stock",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1734534687317.jpg",
      title: "LSGER0020",
      stocks: "Out of stock",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1734534488866.jpg",
      title: "LSGER0019",
      stocks: "Out of stock",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1734533815601.jpg",
      title: "LSGPD0037",
      aed: "695.70 AED",
      stock: "only 2 left",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1734533592866.jpg",
      title: "LSGPD0036",
      aed: "737.21 AED",
      stock: "only 5 left",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1734532659962.jpg",
      title: "LSGPD0035",
      aed: "566.65 AED",
      stock: "Only 3 left",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1734532431079.jpg",
      title: "LSGPD0047",
      aed: "1367.20 AED",
      stock: "Only 1 left",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1734532201837.jpg",
      title: "LSGPD0046",
      stocks: "Out of stock",
    },
  ];

  return (
      <div className="stock">
        <div className="toptext">top products</div>
      <Slider {...settings}  className="stockslider">


        {data.map((item,index)=>(

            <div className="mainstock">


                <div className="stockimage" style={{backgroundImage:`url(${item.image})`}} >
                    <div className="products">

                    <div className="stocktitle">{item.title}</div>
                    <div className="stockaed">{item.aed}</div>
                    <div className="availablestock">{item.stock}</div>
                    <div className="availablestocks">{item.stocks}</div>


                    </div>
                </div>
                    








             </div>
        ))}







      </Slider>

        </div>
  );
};

export default TopProducts;
