import React from "react";
import "./Style.css";
const MenuList = ["PORTFOLIA", "BLOG", "CV", "STORE", "ABOUT ME", "CONTACT"];
export const NavBar = () =>{
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