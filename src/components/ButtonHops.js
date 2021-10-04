import React from "react";

function ButtonHops(props) {
    console.log(props);
    function danger(className){
        return (
            alert('заполните поля корректно')
        );//на подумать можно через состояния добраться до className и при нажатии менять его 
    };
    return (
        <button className={props.className} onClick={danger}>{props.name}</button>
    );
};

export default ButtonHops;