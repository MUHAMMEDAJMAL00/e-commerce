import React from "react";
import "./newstyles.scss";
import nextmelogo from "../assets/nextmelogo.jpg";
import locationpic from "../assets/locationpic.png";
import searchbar from "../assets/searchbar.jpg";
import cart from "../assets/cart.png";
import user from "../assets/user.png";
import lan from "../assets/lan.png";
import "bootstrap/dist/css/bootstrap.min.css";
import lucky from "../assets/lucky.png";
import { BsSearch } from "react-icons/bs";
import { ImParagraphRight } from "react-icons/im";
import { LuScale } from "react-icons/lu";
import { BsBag } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi2";
import { MdOutlineSell } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { Popover } from "antd"

const Header = () => {

  const text = <span>Title</span>;

  
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <div className="header container-fluid">
      <div className="header-deskbox col-xl-6">
        <div className="header-desklogo">
          <img src={lucky} className="header-desklogos" />
        </div>

        <div className="header-rate ">
          <div className="textrate1"> LIVE RATE</div>
          <div className="textrate2">TODAY'S PRICE</div>
        </div>

        <div className="header-searchbox">
          <div className="header-searchbar ">
            <BsSearch />
            <input
              className="header-inputsearch "
              placeholder="Search ..."
            ></input>
          </div>
        </div>
        <div className="header-digital">
          <div className="header-digitaltext">Digital Gold</div>
          <ImParagraphRight />
        </div>
        <div className="header-digital">
          <div className="header-digitaltext">LSG Auction</div>
          <LuScale />
        </div>

        <div className="header-cartimage">
          <BsBag size={25} />
          <HiOutlineUser size={27} />
        </div>
      </div>

      <div className="header-categories">
      <Popover placement="bottomLeft" title={text} content={content}>

            <div className="header-categorytext">ZERO % MAKING</div>

          </Popover>



        <div className="header-categorytext">GOLD JWELLARY</div>
        <div className="header-categorytext">DIAMOND JEWELLARY</div>
        <div className="header-categorytext">LSG COLLECTION</div>
        <div className="header-categorytext">COINS & BARS</div>
        <div className="header-sell">
          <div  className="header-sellhead">
            <MdOutlineSell size={20} />
            <div className="header-selltext">Sell To US</div>
          </div>

          <div className="header-sellhead">
            <IoCallOutline size={20}  />
            <div className="header-selltext">+971 54 581 6161</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
