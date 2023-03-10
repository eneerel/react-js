import "./Style.css";
import {Btn} from "./btn";

const ButtonItems = [
  {
    text: "TWITTER",
    link: "#",
    icon: "/images/twitter.png",
    class: "BtnTwttr",
  },
  {
    text: "LINKEDIN",
    link: "#",
    icon: "/images/linked_in.png",
    class: "BtnLnkdn",
  },
  {
    text: "MEDIUM",
    link: "#",
    icon: "./images/Group 293.png",
    class: "BtnMdm",
  },
];

const TextSection = () => {
  return (
    <div className="text">
      <h1>Blog Posts</h1>
      <h2>I think so, this is it</h2>
      <p>
        Design begins after I begin to think about how to present an experience
        most successfully, whether a button I put in can solve a problem. The
        only point in design is not ui design, if the user does not have a good
        experience at the end of the product, the design will be considered
        unsuccessful in my opinion.
      </p>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="Hero">
      <div className="LeftSectionHero">
        <TextSection />
        <div className="Buttons">
          {ButtonItems.map((item) => (
            <Btn
              key={item.text}
              name={item.text}
              icon={item.icon}
              classNer={item.class}
            />
          ))}
        </div>
      </div>
      <div className="RightSectionHero">
      <img src="./images/Group 296.png" alt="zurag"/>
      </div>
    </div>
  );
};

export default HeroSection;