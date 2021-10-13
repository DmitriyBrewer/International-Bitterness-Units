// import React,{ useState } from "react";
import React,{useEffect, useState} from "react";
import LI from "./components/LI";
import H1 from "./components/H1";


//GIT REACTINPUT
function App() {


//State input Volume 
  const [volume, setVolume] = useState(""); //State input volume
  const [volumeClean, setvolumeClean] = useState(false); //State input Clean, состояние выхода из input
  const [volumeError, setvolumeError] = useState("Введите корректный объём сусла");//State input Error состояние ошибки значения
  const [volumeClass, setvolumeClass] = useState("inPut inPut-design");//State input Classchange состояние класса input
  const [volumeh1, setvolumeH1] = useState('h1styleRed');//State valid form Состояние правильного текста h1 
// const [volumePlaceholder, setvolumePlaceholder] = useState("Введите объем сусла, л"); //State input placeholder
//State input Volume




//State input Plato
  const [plato, setPlato] = useState("");
  const [platoClean, setplatoClean] = useState(false); //State input Clean, состояние выхода из input
  const [platoError, setplatoError] = useState("Введите корректную плотность сусла");//State input Error состояние ошибки значения
  const [platoClass, setplatoClass] = useState("inPut inPut-design PlatoSG");//State input Classchange состояние класса input
  const [platoh1, setplatoH1] = useState('h1styleRed');
//State input Plato


//State input SG
const [plato1, setPlato1] = useState("");
const [platoClean1, setplatoClean1] = useState(false); //State input Clean, состояние выхода из input
const [platoError1, setplatoError1] = useState("Введите корректную плотность сусла");//State input Error состояние ошибки значения
const [platoClass1, setplatoClass1] = useState("inPut inPut-design PlatoSG");//State input Classchange состояние класса input
const [platoh11, setplatoH11] = useState('h1styleRed');
//State input SG




//State IBU
const [ibu, setIbu] = useState("");

const [classSubmit, setclassSubmit] = useState("inPut buttongrey")
const [validForm, setFormValid] = useState(false); // разблокирова кнопки Посчитать IBU

//Поработать над useEffect условие if не совсем верно выполняется
useEffect(() => {
  if (volumeError || platoError){
    setFormValid(true);
    setclassSubmit("inPut button1");
  } else setFormValid(false);
}, [volumeError, platoError]);
// чтобы установить форму нужно на button который отвечает за  Submit повесить disabled={!validForm};

///State IBU



//State - Button Og, Plato
  const [butPlato, newClassPlato] = useState('butPurp');
  const [butOG, newClassOG] = useState('but');
  const [span, setSpan] = useState('');// это Plato
  const [span2, setSpan2] = useState('inPut-hidden');// это SG

  // Submit PLATO OG
  function SubmitPlato(e) {
    e.preventDefault();
    // e.className = "butPurp"
    newClassPlato('butPurp');
    newClassOG('but');
    setSpan(''); //при нажатии пропадает input
    setSpan2('inPut-hidden');
    var Plato = 'Plato'
    return console.log(Plato);
  };

  function SubmitOG(e) {
    e.preventDefault();
    newClassPlato('but');
    newClassOG('butPurp');
    setSpan('inPut-hidden'); //при нажатии пропадает input
    setSpan2('')
    var SG = 'SG'
    return console.log(SG);
  };
// Submit PLATO OG
//State - Button Og, Plato



//Blurhandlers. Ослеживание состояния выхода из input
function blurHandler(e){
  switch (e.target.name){
    case 'volume':
      setvolumeClean(true);
        if (!volume.trim() || volume > 100000){
          setvolumeError('Error Некорректное значение объёма');//Описываем состояние ошибки
          setvolumeClass('inPut inPut-design inPut-danger');//Описываем состояние ошибки
          setvolumeH1('h1styleRed');
  };
    break;

    case 'plato':
      setplatoClean(true);
      if (!plato.trim() || plato > 36){
        setplatoError('Error Некорректное значение плотности');//Описываем состояние ошибки
        setplatoClass('inPut inPut-design PlatoSG inPut-danger');//Описываем состояние ошибки
        setplatoH1('h1styleRed');
};
      break;

      case 'plato1':
      setplatoClean1(true);
      if (!plato1.trim() || plato1 > 1.1){
        setplatoError1('Error Некорректное значение плотности');//Описываем состояние ошибки
        setplatoClass1('inPut inPut-design PlatoSG inPut-danger');//Описываем состояние ошибки
        setplatoH11('h1styleRed');
};
      break;
      default://иначе выдает Expected a default case default-case
  };
};
//Blurhandlers





//Handlers. Ослеживание состояния ввода value для input
const volumeHandler = (e) => {
  setVolume(e.target.value);
  console.log(e.target.value);
    if (!volume.trim()){
      //эту часть можно удалить
      console.log('корректно');
      setvolumeError('Некорректное значение');
      setvolumeClass('inPut inPut-design inPut-danger');
      //эту часть можно удалить
      
    } else 
    console.log('корректное');
    setvolumeH1('h1styleTrue');
    setvolumeError('Корректное значение');//Описываем состояние правильного ввода
    setvolumeClass('inPut inPut-design inPut-true');//Описываем состояние правильного ввода
};

const platoHandler = (e) => {
  setPlato(e.target.value); 
  console.log(e.target.value);
  if (!plato.trim()){
    //эту часть можно удалить
    console.log('корректно');
    setplatoError('Некорректное значение');
    setplatoClass('inPut inPut-design PlatoSG inPut-danger');
    //эту часть можно удалить
    
  } else 
  console.log('корректное');
  setplatoH1('h1styleTrue');
  setplatoError('Корректное значение');//Описываем состояние правильного ввода
  setplatoClass('inPut inPut-design PlatoSG inPut-true');//Описываем состояние правильного ввода
};

const platoHandler1 = (e) => {
  setPlato1(e.target.value); 
  console.log(e.target.value);
  if (!plato1.trim()){
    //эту часть можно удалить
    console.log('корректно');
    setplatoError1('Некорректное значение');
    setplatoClass1('inPut inPut-design PlatoSG inPut-danger');
    //эту часть можно удалить
    
  } else 
  console.log('корректное');
  setplatoH11('h1styleTrue');
  setplatoError1('Корректное значение');//Описываем состояние правильного ввода
  setplatoClass1('inPut inPut-design PlatoSG inPut-true');//Описываем состояние правильного ввода
};



function ibuHandler () {};//разблокировка изменеия input
//Handlers










//Handle Submit IBU
    function handleSubmit(e){
      e.preventDefault();
      if(!volume.trim() || !plato.trim()){
        setIbu('Введите поля корректно');
      } else 
      setIbu('volume= ' + volume + ' plato =  ' + plato);
    };
//Handle Submit IBU





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
                <LI/><input name="volume" placeholder='Введите объем сусла, л' className={volumeClass} type="text" value={volume} onChange={e=>volumeHandler(e)} onBlur={blurHandler}/>

                {(volumeClean && volumeError) && <h1 className={volumeh1} >{volumeError}</h1>}

                <span className={span}><LI/><input name="plato" placeholder="Введите плотность сусла" className={platoClass} type="text" value={plato} onChange={e=>platoHandler(e)} onBlur={blurHandler}/><button className={butPlato} onClick={SubmitPlato} type="radio">Plato</button>
                  <button className={butOG} onClick={SubmitOG} type="radio">SG</button></span>
                  {(platoClean && platoError) && <h1 className={platoh1} >{platoError}</h1>}

                <span className={span2}><LI/><input name="plato1" placeholder="Введите плотность SG" className={platoClass1} type="text" value={plato1} onChange={e=>platoHandler1(e)} onBlur={blurHandler}/><button className={butPlato} onClick={SubmitPlato} type="radio">Plato</button>
                  <button className={butOG} onClick={SubmitOG} type="radio">SG</button></span>

                {(platoClean1 && platoError1) && <h1 className={platoh11} >{platoError1}</h1>}
                <LI/><button className={classSubmit} id="buttonNEXT" type="submit" disabled={!validForm}>Посчитать IBU</button>  
              </form>
              <LI/><input placeholder="IBU" className="inPut inPut-design" value={ibu} onChange={ibuHandler} />
            </ul>
        </div>
    </div>
  </div> 
  )};
    

export default App;