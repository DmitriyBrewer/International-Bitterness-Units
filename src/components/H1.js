import React from "react";

function H1(props) {
    return (
        <h1 className={props.className}>{props.textContent}</h1>
    );
};
export default H1;