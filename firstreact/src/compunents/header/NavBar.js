import React from "react";
import "./Navbar.css"
// import Menu from "./menu/Menu"
const MenuList = ["PORTFOLIA", "BLOG", "CV", "STORE", "ABOUT ME", "CONTACT"];
export const NavBar = (props) =>{
    return(
    <div className="NavBar">
    <div className="Logo">
    <img src="/images/Leap.png" alt=""/>
    <img src="/images/HireMe.png" alt=""/>
    </div>
    <div>
    <ul className="navLists">
      {MenuList.map((x)=><li key={x} className="navLists">{x}</li>)}
    </ul>
    </div>
    </div>
    );
  };