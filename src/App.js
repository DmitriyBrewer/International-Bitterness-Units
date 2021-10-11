import React from "react";
import LI from "./components/LI";
import H1 from "./components/H1";
import Input from "./components/Input";


function App() {

  function handlerSubmit(e){
    e.preventDefault();

  }


  return (
  <div>
    <header className="navbarStyle">
        <H1 className="h1styleBold" textContent="Калькулятор горечи пива"/>
        <p id='log'></p>
    </header>
    <div className="frame">
        <div className="calculate-frame">
            <ul className="UL" id="ulFRAME">
              <form onSubmit={handlerSubmit}>
                <LI/><H1 className="h1styleBlack" textContent="Введите параметры сусла"/>
                <LI/><Input placeholder="Введите объем сусла, л" className="inPut inPut-design" type="text" id="input_V" />
                <LI/>
                    <button className="inPut button1" id="buttonNEXT" type="submit">Посчитать IBU</button>  
              </form>
              <LI/><input placeholder="IBU" className="inPut inPut-design"/>
            </ul>
        </div>
    </div>
  </div> 
  )};
    

export default App;



// function handleSubmit(e) {
//   e.preventDefault();//preventDefault - например при нажатии на флажок он появляется, а этот метод предотвращает это событие и флажок не будет появлятся, устанавливает событие на дефолтные настройки. В нашем конкретном случае значение по умолчанию(изначально) равно "" , но мы потом меняем состояние, нажимаем addTask и значение не возвращается к "" а покажет значение setNamee("")
//   // console.log(name);// name это value={name} , значение вводимое в input
//   if (!name.trim()) {
//     // console.log(name.trim());// Если у значение value={name} удалены все пробелы, возвращаем true(name.trim()), если у значения value={name} удалены все пробелы, возвращаем false (name.trim()). true или false мы возвращаем в handLeSubmit и если это false, то функция дальше не будет работать. в сути ""+пробелы = false , "handlechange"=true
//     console.log('Invalid value');
//     return;//возвращаем !name.trim() которе равно true или false 
//   }//(Логическое НЕ) Возвращает false, если операнд может быть преобразован в true; в противном случае возвращает true.Метод trim() удаляет пробельные символы с начала и конца строки. и мы постоянно возвращаемся в начало функции и повторяем её по кругу пока не получим else
//   else {console.log('Valid Value');}
//   props.addTask(name);//это и есть addTask(name)
//   setName("")//этот вызов функции отвечает за то, что после обновления состояния значение input будет равно "", работает корректно, только при использовании preventDefault тк значение не перехоит к значению по умолчанию
// };