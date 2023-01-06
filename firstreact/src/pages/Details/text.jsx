const items = [
    {Title : "BLOG DETAILS " , Text: "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take." },
    {Title : "BLOG DETAILS " , Text: "Just like graphic design and web develoment, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take." },
    {Title : "BLOG DETAILS " , Text: "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take." },
  ];

export const Text = ()=>{   
return(
 <div className="items"> 
   {
    items.map((item,index) => {
        return(
            <div className="Item" key={index}>
               <h1>{item.Title}</h1>
               <p>{item.Text}</p>
            </div>
        )
        
    })
    }
 </div>
);
};