import React from "react";
import "./Hero.css"
import {Btn} from "./buttons"

const ButtonsItem= [
  { imageUrl:"./images/twitter.png" , text:"TWITTER" , backgroundColor:"#47ACDF" },
  { imageUrl:"./images/linked_in.png" , text:"LINKEDIN" },
  { imageUrl:"./images/twitter.png" , text:"MEDIUM" },
];
export const Hero = () =>{
    return(
    <div className="HeroSection">
      <div className="Text">
       <h1 className="red">Blog Posts</h1>
       <h1 className="think">I think so, this is it.</h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, ea dolore. Vel pariatur unde harum, nobis ipsa tempore, numquam aliquam vitae quas, nihil exercitationem? Excepturi veritatis iusto quibusdam cupiditate reiciendis ullam unde mollitia obcaecati a similique, nostrum architecto, perspiciatis voluptatem suscipit adipisci pariatur reprehenderit modi inventore repellendus quasi harum nihil. Reprehenderit eveniet nisi distinctio, quis nobis ipsam excepturi. Sunt, minus.</p>
       
       <div className="Buttons">
         { ButtonsItem.map((items) => 
          <Btn text = {items.text} icons= {items.imageUrl} style={{backgroundColor:items.backgroundColor}}/>
         )
         }
       </div>

       </div>

      <div className="image">
      <img src="./images/Saly-16.png" alt=""/>

      </div>
    </div>
    );
  };