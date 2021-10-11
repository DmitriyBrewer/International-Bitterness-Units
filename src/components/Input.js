import React, {useState} from "react";

function Input(props){

    const [value, newValue] = useState("");

    function handleChange(e) {
        newValue(e.target.value); 
        console.log(e.target.value);
    }

    return (
        <input placeholder={props.placeholder} className={props.className}  type={props.type} id={props.type} value={value} onChange={handleChange}/>
    );
};

export default Input;



