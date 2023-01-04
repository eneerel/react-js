import React from "react";
import "./Catagory.css"
const CatagoryList = ["ALL", "UI Design", "UX Design", "Product Design", "Articles", "Tutorials", "News"];
export const Catagory = () =>{
    return(
    <div className="Catagory">
    <ul className="catagories">
      {CatagoryList.map((x)=><li key={x} className="catagories">{x}</li>)}
    </ul>
    </div>
    );
  };