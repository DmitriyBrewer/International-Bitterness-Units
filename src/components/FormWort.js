import React, { useState } from "react";

function FormWort(props){
    const [value, inputValue] = useState("");
    const [value1, inputValue1] = useState("");
    const [value2, inputValue2] = useState("");
    
    function handleChange(e) {
        inputValue(e.target.value);
    }

    function handleChange1(e) {
        inputValue1(e.target.value);
    }

    function handleChange2(e) {
        inputValue2(e.target.value);
    }

   

    function handleSubmit(e) {
        
      e.preventDefault();
    //   props.addValue(value);//callback с Appjs
    //   props.addValue(value1);//callback с Appjs
    //   props.addValue(value2);//callback с Appjs
    props.addValue(value,value1,value2);
      inputValue("");
      inputValue1("");
      inputValue2("");
    }

    const volume = value;//выведем введённое значение в консоль
    const plato = value1;//выведем введённое значение в консоль
    const boiltime = value2;//выведем введённое значение в консоль

    console.log("volume= " + volume);
    console.log("plato= " + plato);
    console.log("boiltime= " + boiltime);


    
    return (
            <form onSubmit={handleSubmit}>
            <li className="inputstyle"><h1 className="h1styleBlack">Введите параметры сусла</h1></li>
            <li className="inputstyle"><input placeholder="Введите объем сусла, л" className="inPut inPut-design" value={value} onChange={handleChange}/></li>
            <li className="inputstyle"><input placeholder="Введите плотность сусла" className="inPut PlatoSG inPut-design" value={value1} onChange={handleChange1}/>
                <button className="but" onClick={()=>alert("Plato")} type="button">Plato</button>
                <button className="but butSG" onClick={()=>alert("SG")} type="button">SG</button>
            </li>
            <li className="inputstyle"><input id="inputboiltime" placeholder="Введите время кипячения, мин" className="inPut inPut-design" value={value2} onChange={handleChange2} /></li>
            <li className="inputstyle" >
                <button className="inPut button1" id="buttonNEXT" type="submit">Далее</button>    
            </li>
            </form>
            );
}

export default FormWort;//Wort это сусло

