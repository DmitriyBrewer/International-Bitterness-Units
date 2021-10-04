import React from "react";
import FormWort from "./components/FormWort";
import FormHops from "./components/FormHops";


function App() {

//Это и есть функция калькуляции IBU
  function addValue(value,value1,value2) {
    
    alert("Объем сусла= " + value + " л Плотность= " + value1 +  " Plato Время кипячения= " + value2 + " мин ");
    // console.log(value);
  }
  
  return (<div>
    <header className="navbarStyle">
        <h1 className="h1styleBold">Калькулятор горечи пива</h1>
        <p id='log'></p>
    </header>
    <div className="frame">
        <div className="calculate-frame">
            <ul className="UL" id="ulFRAME">
              <FormWort addValue={addValue}/>
              <FormHops/>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default App
