import App from "../App";

export const UserCard = (props) =>{
    return(
    <div className="card">
      <div>
        <h2>Name:{props.name}</h2>
        <p>Age: {props.age}</p>
      </div>
    </div>
    );
  };
  