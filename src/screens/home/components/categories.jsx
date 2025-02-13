import React from "react";
import Slider from "react-slick";

function  Categories() {
  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow:8,
    slidesToScroll: 3
  };


let data=[{
   image:"https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1709140121217.jpg",
   title:"Bangles Zero % MC"
},
{
   image:"https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1732222849591.jpg",
   title:"24 Karat Gold jewellery"
},
{
   image:"https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1709144673340.jpg",
   title:"Gold Necklace Zero % MC"
},
{
   image:"https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1708937988573.jpg",
   title:"Gold Long chains Zero % MC"
},
{
   image:"https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1709140997011.jpg",
   title:"Bracelets Zero % MC"
},
{
  image:"https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1709141429954.jpg",
  title:"Men's collection Zero % MC"
},
{
  image:"https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1708724271180.jpg",
  title:"Gold Earring Zero % MC"
},
{
  image:"https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1709141304291.jpg",
  title:"Gold Accessories"
},
{
  image:"https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1708934120597.jpg",
  title:"Gold Pendant Zero % MC"
},
{
  image:"https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1708725544536.jpg",
  title:"Gold Rings Zero % MC"
},
{
  image:"https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1732047750063.jpg",
  title:"Gold Ring 22K"
},
{
  image:"https://bairuha-bucket.s3.ap-south-1.amazonaws.com/luckyEcommerce/1732049619266.jpg",
  title:"Gold Pendant 22K"
},




]







  return (
    <div className="slider-container">
        <Slider {...settings}   >
       {data.map((item,index)=>(
        <div key={index} className="slidder">
          <div className="cat2">

          <div className="cat1" 
            style={{backgroundImage:`url(${item.image})`,
            backgroundSize:"contain"}}>
          </div>


          </div>
           
          <div className="slider-title">
            <div >{item.title}</div>
          </div>













        </div>
       ))}
      </Slider>
    </div>
  );
}

export default Categories;
