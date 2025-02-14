import React from "react";
import "../styles.scss";
(<link rel="preconnect" href="https://fonts.googleapis.com" />),
  (<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />),
  (
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
      rel="stylesheet"
    />
  );
const Goldprice = () => {
  return (
    <div className="gold-head">
      <div className="gold-title">TODAY'S RETAIL GOLD JEWELLERY PRICE</div>
      <div className="gold-date">13-02-2025 - RATE IN AED PER GM</div>
      <div className="row goldbox1">
        <div className=" goldbox col-lg-2 ">Gold 24 Karat - <span style={{color:"rgb(184, 130, 31)",fontSize:"20px"}}> 319.25</span></div>
        <div className=" goldbox col-lg-2 ">    Gold 22 Karat- <span style={{color:"rgb(184, 130, 31)",fontSize:"20px"}}>295.50</span>                     </div>
        <div className=" goldbox col-lg-2 "> Gold 21 Karat - <span style={{color:"rgb(184, 130, 31)",fontSize:"20px"}}>286.00</span></div>
        <div className=" goldbox col-lg-2 ">Gold 18 Karat - <span style={{color:"rgb(184, 130, 31)",fontSize:"20px"}}>245.25</span></div>
        <div className=" goldbox col-lg-2 "> Silver - <span style={{color:"rgb(184, 130, 31)",fontSize:"20px"}}>3.54</span></div>
     
      
      </div>
    </div>
  );
};

export default Goldprice;
