import React from "react";
import "../styles.scss";
import Slider from "react-slick";

const  Trending = () => {
  var settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 4.5,
    slidesToScroll: 4,
    arrow: false,
    autoplay: true,
  };

  let data = [
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1735283578749.jpg",
      title: " LSGBL0006",
      stocks:"Out of stock"
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1735283263188.jpg",
      title: "LSGBL0005 ",
      aed:"1917.50 AED",
      stock:"only 1 left"

    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1735282906717.jpg",
      title: " LSGBL0004",
      stocks: "Out of stock",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1734792790678.jpg",
      title: "LSGBNG0043",
      aed:"4554.84 AED",
      rating: "4.0 (1)",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1734792508749.jpg",
      title: " LSGBNG0042",
      aed: "7660.69 AED",
      
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1734536800471.jpg",
      title: "LSGER0028",
      aed: "655.86 AED",
      stock: "only 2 left",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1734536592663.jpg",
      title: "LSGER0027",
      aed: "1375.49 AED",
      stock: "Only 3 left",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1734536424996.jpg",
      title: "LSGER0026",
      aed: "1231.39 AED",
      stock: "Only 3 left",
    },
    {
      image:
        "https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1734536274654.jpg",
      title: "LSGER0025",
      aed:"1762.91 AED",
      stock: "only 1 left",
    },
    {
   image:"https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1734535805316.jpg",
   aed:"1480.90 AED",
   stocks:"only 1 left"

    }
  ];























































  return (
      <div className="stock">
        <div className="toptext">trending now</div>
      <Slider {...settings}  className="stockslider">


        {data.map((item,index)=>(

            <div className="mainstock">


                <div className="stockimage" style={{backgroundImage:`url(${item.image})`}} >
                    <div className="products">

                    <div className="stocktitle">{item.title}</div>
                    <div className="stockaed">{item.aed}</div>
                    <div className="availablestock">{item.stock}</div>
                    <div className="availablestocks">{item.stocks}</div>
                    <div className="availablerating">{item.rating}</div>


                    </div>
                </div>
                    








             </div>
        ))}







      </Slider>

        </div>
  );
};

export default  Trending;
