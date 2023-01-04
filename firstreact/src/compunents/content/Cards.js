import React from "react";
import "./cards.css"
const CardsBody = [
    { imageUrl:"./images/Rectangle 124 (1).png", ognoo:"Nov 23 2020", text:"This way is wrong about UI Design.", tailbar:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis itaque explicabo nulla corrupti, amet iste, nostrum excepturi neque vel in, aliquid architecto voluptatum velit beatae voluptatibus id obcaecati tempora exercitationem facilis? Doloribus reiciendis natus laborum consequuntur error itaque iure voluptates.", },
    { imageUrl:"./images/Rectangle 124.png", ognoo:"Nov 23 2020", text:"This way is wrong about UI Design.", tailbar:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis itaque explicabo nulla corrupti, amet iste, nostrum excepturi neque vel in, aliquid architecto voluptatum velit beatae voluptatibus id obcaecati tempora exercitationem facilis? Doloribus reiciendis natus laborum consequuntur error itaque iure voluptates.", },
    { imageUrl:"./images/Rectangle 124 (1).png", ognoo:"Nov 23 2020", text:"This way is wrong about UI Design.", tailbar:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis itaque explicabo nulla corrupti, amet iste, nostrum excepturi neque vel in, aliquid architecto voluptatum velit beatae voluptatibus id obcaecati tempora exercitationem facilis? Doloribus reiciendis natus laborum consequuntur error itaque iure voluptates.", },
    { imageUrl:"./images/Rectangle 124.png", ognoo:"Nov 23 2020", text:"This way is wrong about UI Design.", tailbar:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis itaque explicabo nulla corrupti, amet iste, nostrum excepturi neque vel in, aliquid architecto voluptatum velit beatae voluptatibus id obcaecati tempora exercitationem facilis? Doloribus reiciendis natus laborum consequuntur error itaque iure voluptates.", },
    { imageUrl:"./images/Rectangle 124 (1).png", ognoo:"Nov 23 2020", text:"This way is wrong about UI Design.", tailbar:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis itaque explicabo nulla corrupti, amet iste, nostrum excepturi neque vel in, aliquid architecto voluptatum velit beatae voluptatibus id obcaecati tempora exercitationem facilis? Doloribus reiciendis natus laborum consequuntur error itaque iure voluptates.", },
    { imageUrl:"./images/Rectangle 124.png", ognoo:"Nov 23 2020", text:"This way is wrong about UI Design.", tailbar:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis itaque explicabo nulla corrupti, amet iste, nostrum excepturi neque vel in, aliquid architecto voluptatum velit beatae voluptatibus id obcaecati tempora exercitationem facilis? Doloribus reiciendis natus laborum consequuntur error itaque iure voluptates.", },
];
export const Cards = () =>{
    return(
    <div className="CardsBody">
     {
    CardsBody.map((CardsBody,index) => {
        return(
            <div className="cardItem" key={index}>
               <img className="img" src={CardsBody.imageUrl} alt="zurag"/> 
               <h5 className="date">{CardsBody.ognoo}</h5>
               <h2 className="title">{CardsBody.text}</h2>
               <p className="pra">{CardsBody.tailbar}</p>
            </div>
        )
        
    })
    }
    </div>
    );
  };