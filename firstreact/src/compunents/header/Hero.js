import React from "react";
import "./Hero.css"
export const Hero = (_props) =>{
    return(
    <div className="HeroSection">
      <div className="Text">
       <h1 className="red">Blog Posts</h1>
       <h1 className="think">I think so, this is it.</h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, ea dolore. Vel pariatur unde harum, nobis ipsa tempore, numquam aliquam vitae quas, nihil exercitationem? Excepturi veritatis iusto quibusdam cupiditate reiciendis ullam unde mollitia obcaecati a similique, nostrum architecto, perspiciatis voluptatem suscipit adipisci pariatur reprehenderit modi inventore repellendus quasi harum nihil. Reprehenderit eveniet nisi distinctio, quis nobis ipsam excepturi. Sunt, minus.</p>
       <div className="icons">
       <div className="Twitter">
       <img src="./images/twitter.png" alt="zurag"/>
       <h4>TWITTER</h4>
       </div>
       <div className="LinkedIn">
       <img src="./images/linked_in.png" alt=""/>
       <h4>LINKEDIN</h4>
       </div>
       <div className="Vector">
       <img src="./images/Vector.png" alt=""/>
       <h4>MEDIUM</h4>
       </div>
       </div>
       </div>
      <div className="image">
      <img src="./images/Saly-16.png" alt=""/>
      </div>
    </div>
    );
  };