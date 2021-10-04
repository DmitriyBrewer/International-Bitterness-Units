import React from "react";
import ButtonHops from "./ButtonHops";

function FormHops(){
    
    return (
        <form className="visuall-hidden">
        <li className="inputstyle"><h1 className="h1styleBlack">Кол-во хмелей</h1></li>
        <li className="inputstyle visuall-hidden">
        <ButtonHops name="1" className="but"/>
        <ButtonHops name="2" className="but"/>
        <ButtonHops name="3" className="but"/>
        <ButtonHops name="4" className="but"/>
        <ButtonHops name="5" className="but"/>
        <ButtonHops name="+" className="but"/>
        </li>
          <li className="inputstyle"><h1 className="h1styleBlack">Хмель 1</h1></li>
          <li className="inputstyle"><input placeholder="Наименование" className="inPut inPut-design"/></li>
          <li className="inputstyle"><input placeholder="Кол-во, г" className="inPut inPut-design"/></li>
          <li className="inputstyle"><input placeholder="Горечь" className="inPut inPut-design"/></li>
          <li className="inputstyle"><input placeholder="Время задачи" className="inPut inPut-design"/></li>

          <li className="inputstyle"><h1 className="h1styleBlack">Хмель 2</h1></li>
          <li className="inputstyle"><input placeholder="Наименование" className="inPut inPut-design"/></li>
          <li className="inputstyle"><input placeholder="Кол-во, г" className="inPut inPut-design"/></li>
          <li className="inputstyle"><input placeholder="Горечь" className="inPut inPut-design"/></li>
          <li className="inputstyle"><input placeholder="Время задачи" className="inPut inPut-design"/></li>

          <li className="inputstyle"><h1 className="h1styleBlack">Хмель 3</h1></li>
          <li className="inputstyle"><input placeholder="Наименование" className="inPut inPut-design"/></li>
          <li className="inputstyle"><input placeholder="Кол-во, г" className="inPut inPut-design"/></li>
          <li className="inputstyle"><input placeholder="Горечь" className="inPut inPut-design"/></li>
          <li className="inputstyle"><input placeholder="Время задачи" className="inPut inPut-design"/></li>

          <li className="inputstyle"><h1 className="h1styleBlack">Хмель 4</h1></li>
          <li className="inputstyle"><input placeholder="Наименование" className="inPut inPut-design"/></li>
          <li className="inputstyle"><input placeholder="Кол-во, г" className="inPut inPut-design"/></li>
          <li className="inputstyle"><input placeholder="Горечь" className="inPut inPut-design"/></li>
          <li className="inputstyle"><input placeholder="Время задачи" className="inPut inPut-design"/></li>

          <li className="inputstyle"><h1 className="h1styleBlack">Хмель 5</h1></li>
          <li className="inputstyle"><input placeholder="Наименование" className="inPut inPut-design"/></li>
          <li className="inputstyle"><input placeholder="Кол-во, г" className="inPut inPut-design"/></li>
          <li className="inputstyle"><input placeholder="Горечь" className="inPut inPut-design"/></li>
          <li className="inputstyle"><input placeholder="Время задачи" className="inPut inPut-design"/></li>
        
        <li className="inputstyle">
            <button className="inPut button1" id="buttonNEXT">Посчитать IBU</button>
        </li>
        <li className="inputstyle"><input placeholder="IBU" className="inPut inPut-design"/></li>
        </form>
            );
}

export default FormHops;