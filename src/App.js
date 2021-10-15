// import React,{ useState } from "react";
import React,{useEffect, useState} from "react";
import LI from "./components/LI";
import H1 from "./components/H1";


//GIT
function App() {


//State input Volume 
  const [volume, setVolume] = useState(""); //State input volume
  const [volumeClean, setvolumeClean] = useState(false); //State input Clean, состояние выхода из input
  const [volumeError, setvolumeError] = useState("Введите корректный объём сусла");//State input Error состояние ошибки значения
  const [volumeClass, setvolumeClass] = useState("inPut inPut-design");//State input Classchange состояние класса input
  const [volumeh1, setvolumeH1] = useState('h1styleRed');//State valid form Состояние правильного текста h1 
//State input Volume


//State input Plato-SG
  const [plato, setPlato] = useState("");
  const [platoClean, setplatoClean] = useState(false); //State input Clean, состояние выхода из input
  const [platoError, setplatoError] = useState("");//State input Error состояние ошибки значения
  const [platoClass, setplatoClass] = useState("inPut inPut-design PlatoSG");//State input Classchange состояние класса input
  const [platoh1, setplatoH1] = useState('h1styleRed');
//State input Plato-SG

//State input nameHops 
const [nameHops, setnameHops] = useState(""); //State input nameHops
const [nameHopsClean, setnameHopsClean] = useState(false); //State input Clean, состояние выхода из input
const [nameHopsError, setnameHopsError] = useState("Введите корректное наименование");//State input Error состояние ошибки значения
const [nameHopsClass, setnameHopsClass] = useState("inPut inPut-design");//State input Classchange состояние класса input
const [nameHopsh1, setnameHopsH1] = useState('h1styleRed');//State valid form Состояние правильного текста h1 
//State input nameHops


//State input timeHops 
const [timeHops, settimeHops] = useState(""); //State input timeHops
const [timeHopsClean, settimeHopsClean] = useState(false); //State input Clean, состояние выхода из input
const [timeHopsError, settimeHopsError] = useState("Введите корректный объём сусла");//State input Error состояние ошибки значения
const [timeHopsClass, settimeHopsClass] = useState("inPut inPut-design");//State input Classchange состояние класса input
const [timeHopsh1, settimeHopsH1] = useState('h1styleRed');//State valid 
//State input timeHops


//State input boil 
const [boil, setboil] = useState(""); //State input boil
const [boilClean, setboilClean] = useState(false); //State input Clean, состояние выхода из input
const [boilError, setboilError] = useState("Введите корректный объём сусла");//State input Error состояние ошибки значения
const [boilClass, setboilClass] = useState("inPut inPut-design");//State input Classchange состояние класса input
const [boilh1, setboilH1] = useState('h1styleRed');//State valid 
//State input boil


//State - Button Og, Plato
const [butPlato, newClassPlato] = useState('butPurp');
const [butOG, newClassOG] = useState('but');
const [span, setSpan] = useState('');// это Plato
const [span2, setSpan2] = useState('inPut-hidden');// это SG
const [placeholderSG, setplaceholerSG] = useState('Введите плотность SG');
//State - Button Og, Plato


//State IBU
const [ibu, setIbu] = useState("");
const [classSubmit, setclassSubmit] = useState("inPut buttongrey")
const [validForm, setFormValid] = useState(false); // разблокирова кнопки Посчитать IBU
//State IBU



//!! Submit
useEffect(() => {
  if (volumeError || platoError){
    setFormValid(true);
    setclassSubmit("inPut button1");
  } else setFormValid(false);
}, [volumeError, platoError]);

//Handle Submit IBU
function handleSubmit(e){
  e.preventDefault();
  if(!volume.trim() || !plato.trim() || !boil.trim() || !timeHops.trim()){
    setIbu('Введите поля корректно');
  } else 
  setIbu('volume= ' + volume + ' plato =  ' + plato);
};
//Handle Submit IBU
// чтобы установить форму нужно на button который отвечает за  Submit повесить disabled={!validForm};
// Submit






  // Submit PLATO OG
  function Submit(e){
    switch (e.target.name){
      case 'PLATO':
        e.preventDefault();
        newClassPlato('butPurp');
        newClassOG('but');
        setSpan(''); //при нажатии пропадает input
        setSpan2('inPut-hidden'); 
        setPlato(plato)// сюда встает обратная мат.функция changeSG
    break;

    case 'SG':
      e.preventDefault();
      newClassPlato('but');
      newClassOG('butPurp');
      setSpan('inPut-hidden'); //при нажатии пропадает input
      setSpan2('')
      setplatoH1('h1styleHidden');//скрываем текст ошибки дл инпут
      //функция changeSG переводит Plato в SG и выдает это значение не в value, а в placeholder 
      function changeSG(pl){
        if (!pl.trim() || plato>=36 || plato<=5) {return "Введите плотност SG"
      } else
        var sg = (1 + (pl / (258.6 - (((pl) / 258.2) * 227.1))));
        var parsSG = parseFloat(sg.toFixed(2));
        return parsSG;
      }
      setplaceholerSG(changeSG(plato));
      setPlato(e.target.value);
      break;
      default:
  }};
// Submit PLATO OG



//Blurhandlers. Ослеживание состояния выхода из input
function blurHandler(e){
  switch (e.target.name){
    case 'volume':
      setvolumeClean(true);
      //Как сделать чтобы выражение g12g213 тоже не валидировалась. || !volume.replace(/[^\d.]/g, '') || !volume.replace(/[^+\d]/g, '') || !volume.replace(/[a-zA-Z]/) || volume.replace(/[a-zA-Zа-яА-Я]/)
        if (!volume.trim() || volume <= 0.00001 || volume >= 100000 || !volume.replace(/[^\d.]/g, '') || !volume.replace(/[^+\d]/g, '')){
          setvolumeError('Error Некорректное значение объёма');//Описываем состояние ошибки
          setvolumeClass('inPut inPut-design inPut-danger');//Описываем состояние ошибки
          setvolumeH1('h1styleRed');
  };
    break;

    case 'plato':
      setplatoClean(true);
      if (!plato.trim() || plato>=36 || plato<=5){
        setplatoError('Error Некорректное значение плотности');//Описываем состояние ошибки
        setplatoClass('inPut inPut-design PlatoSG inPut-danger');//Описываем состояние ошибки
        setplatoH1('h1styleRed');
};
      break;

      case 'sg':
        setplatoClean(true);
        if (!plato.trim() || plato>=1.09 || plato<=1){
          setplatoError('ErrAr Некорректное значение плотности');//Описываем состояние ошибки
          setplatoClass('inPut inPut-design PlatoSG inPut-danger');//Описываем состояние ошибки
          setplatoH1('h1styleRed');
  };
        break;

      case 'nameHops':
        setnameHopsClean(true);
        if (!nameHops.trim()){
          setnameHopsError('Error Некорректное наименование');//Описываем состояние ошибки
          setnameHopsClass('inPut inPut-design inPut-danger');//Описываем состояние ошибки
          setnameHopsH1('h1styleRed');
  };
    break;

      case 'boil':
        setboilClean(true);
          if (!boil.trim() || boil <= 0.00001 || boil >= 201 || !boil.replace(/[^\d.]/g, '') || !boil.replace(/[^+\d]/g, '')){
            setboilError('Error Некорректное значение объёма');//Описываем состояние ошибки
            setboilClass('inPut inPut-design inPut-danger');//Описываем состояние ошибки
            setboilH1('h1styleRed');
  };
    break;

      case 'timeHops':
        settimeHopsClean(true);
          if (!timeHops.trim() || timeHops <= 0.00001 || timeHops >= 100000 || !timeHops.replace(/[^\d.]/g, '') || !timeHops.replace(/[^+\d]/g, '')){
            settimeHopsError('Error Некорректное значение объёма');//Описываем состояние ошибки
            settimeHopsClass('inPut inPut-design inPut-danger');//Описываем состояние ошибки
            settimeHopsH1('h1styleRed');
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
    if (!volume.trim()){} else 
    console.log('корректное');
    setvolumeH1('h1styleTrue');
    setvolumeError('Корректное значение');//Описываем состояние правильного ввода
    setvolumeClass('inPut inPut-design inPut-true');//Описываем состояние правильного ввода
};

const platoHandler = (e) => {
  // switch (e.target.name) {}
  setPlato(e.target.value);
  if (!plato.trim()){} else 
    console.log('корректное');
    setplatoH1('h1styleTrue');
    setplatoError('Корректное значение');//Описываем состояние правильного ввода
    setplatoClass('inPut inPut-design PlatoSG inPut-true');//Описываем состояние правильного ввода
}// сделать корректное состояние

const nameHopsHandler = (e) => {
  setnameHops(e.target.value);
  console.log(e.target.value);
    if (!nameHops.trim()){} else 
    console.log('корректное');
    setnameHopsH1('h1styleTrue');
    setnameHopsError('Корректное значение');//Описываем состояние правильного ввода
    setnameHopsClass('inPut inPut-design inPut-true');//Описываем состояние правильного ввода
};

const boilHandler = (e) => {
  setboil(e.target.value);
  console.log(e.target.value);
    if (!boil.trim()){} else 
    console.log('корректное');
    setboilH1('h1styleTrue');
    setboilError('Корректное значение');
    setboilClass('inPut inPut-design inPut-true');
};

const timeHopsHandler = (e) => {
  settimeHops(e.target.value);
  console.log(e.target.value);
    if (!timeHops.trim()){} else 
    console.log('корректное');
    settimeHopsH1('h1styleTrue');
    settimeHopsError('Корректное значение');
    settimeHopsClass('inPut inPut-design inPut-true');
};

function ibuHandler () {};//разблокировка изменеия input
//Handlers

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
                <LI/><input name="volume" placeholder='Введите объем сусла, л' className={volumeClass} type="number" value={volume} onChange={e=>volumeHandler(e)} onBlur={blurHandler}/>
                {(volumeClean && volumeError) && <h1 className={volumeh1} >{volumeError}</h1>}

                <span className={span}><LI/><input name="plato" placeholder="Введите плотность сусла" className={platoClass} type="number" value={plato} onChange={e=>platoHandler(e)} onBlur={blurHandler}/></span>
                <span className={span2}><LI/><input name="sg" placeholder={placeholderSG} className={platoClass} type="number" value={plato} onChange={e=>platoHandler(e)} onBlur={blurHandler}/></span>
                  <button name='PLATO' className={butPlato} onClick={Submit} type="radio">Plato</button>
                  <button name='SG' className={butOG} onClick={Submit} type="radio">SG</button>
                  {(platoClean && platoError) && <h1 className={platoh1} >{platoError}</h1>}

                  <LI/><input name="nameHops" placeholder='Наименование хмеля' className={nameHopsClass} type="text" value={nameHops} onChange={e=>nameHopsHandler(e)} onBlur={blurHandler}/>
                {(nameHopsClean && nameHopsError) && <h1 className={nameHopsh1} >{nameHopsError}</h1>}

                <LI/><input name="boil" placeholder='Кипячение, мин' className={boilClass} type="number" value={boil} onChange={e=>boilHandler(e)} onBlur={blurHandler}/>
                {(boilClean && boilError) && <h1 className={boilh1} >{boilError}</h1>}

                <LI/><input name="timeHops" placeholder='Время внесения' className={timeHopsClass} type="number" value={timeHops} onChange={e=>timeHopsHandler(e)} onBlur={blurHandler}/>
                {(timeHopsClean && timeHopsError) && <h1 className={timeHopsh1} >{timeHopsError}</h1>}


                

                <LI/><button className={classSubmit} id="buttonNEXT" type="submit" disabled={!validForm}>Посчитать IBU</button>  
              </form>
              <LI/><input placeholder="IBU" className="inPut inPut-design" value={ibu} onChange={ibuHandler} />
            </ul>
        </div>
    </div>
  </div> 
  )};
    

export default App;