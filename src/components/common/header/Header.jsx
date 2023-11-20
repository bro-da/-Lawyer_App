import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import profileImage from "../../../assets/Images/profileImage.svg";
import filterIcon from "../../../assets/icons/filter.svg";
import historyIcon from "../../../assets/icons/history.svg";
import settingsIcon from "../../../assets/icons/setting.svg";
import searchIcon from "../../../assets/icons/search.svg";
import { Input } from "antd";

const Header = () => {
  const handlesidebarmobilemenu = () => {
    document.body.classList.toggle("slide-nav");
  };
  return (
    <>
      <div className="header">
        <Link
          to="#"
          className="mobile_btn"
          id="mobile_btn"
          onClick={() => handlesidebarmobilemenu()}
        >
          <GiHamburgerMenu
            color="black"
            size={30}
            style={{ marginTop: "16px" }}
          />
        </Link>
        <div className="user">
          <img
            className="user-image"
            src={profileImage}
            alt="Ryan Taylor"
          />
          <div className="user-text">
            <h6>Mr.Admin</h6>
            <p>Lorem ipsum</p>
          </div>
          <div className="searchbar">
<div style={{height:"30px",width:"40px",backgroundColor:"#0F2C64",borderTopLeftRadius :"6px",borderBottomLeftRadius:"6px", cursor:"pointer"}}>
  <img   src={searchIcon} alt="" />
</div>
            <Input style={{height:"30px" , borderTopLeftRadius :"0px",borderBottomLeftRadius :"0px"}} placeholder="Search in admin panel"/>

          </div>
          <div className="more">
          <img src={settingsIcon} alt="" />
          <img src={historyIcon} alt="" />
          <img src={filterIcon} alt="" />
        </div>
        </div>
        
        
      </div>
    </>
  );
};

export default Header;
