export  const Btn = (props) => {
    const handleClick = (text) =>{
        alert("Hello : " + text);

    };
    return (
        <button 
        className={props.classNer}
        herf=""
        onClick={() =>{
        handleClick(props.name)
        }}
        >
        <img src={props.imageUrl} alt="zurag"/>
        {props.text}
        </button>
    );
}