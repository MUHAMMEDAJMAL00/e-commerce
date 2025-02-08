import React from "react";
import "./newstyles.scss";
import nextmelogo from "../assets/nextmelogo.jpg";
import locationpic from "../assets/locationpic.png";
import searchbar from "../assets/searchbar.jpg";
import cart from "../assets/cart.png";
import user from "../assets/user.png";
import lan from "../assets/lan.png";
import "bootstrap/dist/css/bootstrap.min.css";
import lucky from "../assets/lucky.png"
import { IoLocationOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="header container-fluid">
      <div className="header-deskbox col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div className="header-desklogo">
          <img src={lucky} className="header-desklogos" />
        </div>

        <div className="header-desklocation text-center">
          <div className="header-locationimage">
            <IoLocationOutline size={20} />
            <div> vythiri,wayanad </div>
          </div>
        </div>

        <div className="header-searchbox d-flex flex-md-column  flex-sm-column flex-xs-column col-3 col-sm-3 col-md-6 col-lg-6 col-xl-4">
          <div className="header-searchbar ">
            <div className="header-searchimgs">
              <img className="header-searchimg" src={searchbar} />
            </div>
            <input
              className="header-inputsearch "
              placeholder="Search gifts and flowers..."
            ></input>
          </div>
        </div>
        <div className="header-deskcart">
          <div className="header-deskcartfont">Cart</div>
          <div className="header-deskimage">
            <img src={cart} className="header-deskimage" />
          </div>
        </div>
        <div className="header-deskcart">
          <div className="header-deskcartfont">Sign in</div>
          <div className="header-deskimage">
            <img src={user} className="header-deskimage" />
          </div>
        </div>

        <div className="header-desklanguage">
          <div className="header-language">En</div>
          <img src={lan} className="header-lanimg " />
        </div>
      </div>
      {/* <div className="header-deskcategory"></div> */}


      <div className="background">








        
         </div>




















    </div>
  );
};

export default Header;
