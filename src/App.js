import React,{useState} from "react";
import LI from "./components/LI";
import H1 from "./components/H1";


//GIT REACTINPUT
function App() {


//State input
  const [volume, setVolume] = useState("");
  const [plato, setPlato] = useState("");
  const [ibu, setIbu] = useState("");
//





//State - Button Og, Plato
  const [butPlato, newClassPlato] = useState('butPurp');
  const [butOG, newClassOG] = useState('but');
//








//Контроль состояния инпута если был или не был осуществен в него вход: 
    // const blurHandler = (e) => {
    //   switch (e.target.name) {
    //     case "volume": 
    //     console.log("volume");
    //     break //?
    //     case "plato": 
    //     console.log('plato');
    //     break //?
    //   };
    // };
// Через метод swith по атрибуту name в input определяем из какого именно input был выполнен выход.
// Для активации расскоментировать и в input добавить  onBlur={e => blurHandler(e)}




//Handlers. Ослеживание состояния ввода value для input
    const volumeHandler = (e) => {
      setVolume(e.target.value);
      console.log(e.target.value);
      // if (!volume.trim()){
      //   console.log('некорректное поле');// можно создать состояние ошибки setlavueError
      // } else console.log('корректное поле');
    };

    const platoHandler = (e) => {setPlato(e.target.value); console.log(e.target.value);};
    function ibuHandler () {};
//Handlers


// Submit PLATO OG
    function SubmitPlato(e) {
      e.preventDefault();
      // e.className = "butPurp"
      newClassPlato('butPurp');
      newClassOG('but');
      var Plato = 'Plato'
      return console.log(Plato);
    };

    function SubmitOG(e) {
      e.preventDefault();
      newClassPlato('but');
      newClassOG('butPurp');
      var SG = 'SG'
      return console.log(SG);
    };
// Submit PLATO OG




//Handle Submit
    function handleSubmit(e){
      e.preventDefault();
      if(!volume.trim() || !plato.trim()){
        setIbu('Введите поля корректно');
      } else setIbu('volume= ' + volume + ' plato =  ' + plato);
    };
//Handle Submit





//
  return (
  <div>
    <header className="navbarStyle">
        <H1 className="h1styleBold" textContent="Калькулятор горечи пива"/>
        <p id='log'></p>
    </header>
    <div className="frame">
        <div className="calculate-frame">
            <ul className="UL" id="ulFRAME">
              <form onSubmit={handleSubmit}>
                <LI/><H1 className="h1styleBlack" textContent="Введите параметры сусла"/>
                <LI/><input name="volume" placeholder="Введите объем сусла, л" className="inPut inPut-design" type="text" value={volume} onChange={e=>volumeHandler(e)}/>
                <LI/><input name="plato" placeholder="Введите плотность сусла" className="inPut inPut-design PlatoSG" type="text" value={plato} onChange={e=>platoHandler(e)}/>
                  <button className={butPlato} onClick={SubmitPlato} type="radio">Plato</button>
                  <button className={butOG} onClick={SubmitOG} type="radio">SG</button>
                <LI/><button className="inPut button1" id="buttonNEXT" type="submit">Посчитать IBU</button>  
              </form>
              <LI/><input placeholder="IBU" className="inPut inPut-design" value={ibu} onChange={ibuHandler} />
            </ul>
        </div>
    </div>
  </div> 
  )};
    

export default App;