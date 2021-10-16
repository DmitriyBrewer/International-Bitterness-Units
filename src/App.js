import React,{ useState } from "react";
// import React,{useEffect, useState} from "react";
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

//State input amount 
const [amount, setamount] = useState(""); //State input amount
const [amountClean, setamountClean] = useState(false); //State input Clean, состояние выхода из input
const [amountError, setamountError] = useState("Введите корректный объём сусла");//State input Error состояние ошибки значения
const [amountClass, setamountClass] = useState("inPut inPut-design");//State input Classchange состояние класса input
const [amounth1, setamountH1] = useState('h1styleRed');//State valid form Состояние правильного текста h1 
//State input amount


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

//State input alpha 
const [alpha, setalpha] = useState(""); //State input alpha
const [alphaClean, setalphaClean] = useState(false); //State input Clean, состояние выхода из input
const [alphaError, setalphaError] = useState("Введите корректный объём сусла");//State input Error состояние ошибки значения
const [alphaClass, setalphaClass] = useState("inPut inPut-design");//State input Classchange состояние класса input
const [alphah1, setalphaH1] = useState('h1styleRed');//State valid form Состояние правильного текста h1 
//State input alpha


//State - Button Og, Plato
const [butPlato, newClassPlato] = useState('butPurp');
const [butOG, newClassOG] = useState('but');
const [span, setSpan] = useState('');// это Plato
const [span2, setSpan2] = useState('inPut-hidden');// это SG
const [placeholderSG, setplaceholerSG] = useState('Введите плотность SG');
//State - Button Og, Plato


//State IBU
const [ibuSubmit, setibuSubmit] = useState('');
// const [classSubmit, setclassSubmit] = useState("inPut button1")
// const [validForm, setFormValid] = useState(false);; // разблокирова кнопки Посчитать IBU
//State IBU


//Handle Submit IBU
function handleSubmit(e){
  e.preventDefault();
  if (volume === "" || plato === "" || nameHops === "" || boil === "" || amount === "" || alpha === "" || timeHops === ""){
  } else 
  setibuSubmit(IBU());}
 
//Handle Submit IBU







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

      case 'amount':
        setamountClean(true);
        //Как сделать чтобы выражение g12g213 тоже не валидировалась. || !amount.replace(/[^\d.]/g, '') || !amount.replace(/[^+\d]/g, '') || !amount.replace(/[a-zA-Z]/) || amount.replace(/[a-zA-Zа-яА-Я]/)
          if (!amount.trim() || amount <= 0.00001 || amount >= 100000 || !amount.replace(/[^\d.]/g, '') || !amount.replace(/[^+\d]/g, '')){
            setamountError('Error Некорректное значение объёма');//Описываем состояние ошибки
            setamountClass('inPut inPut-design inPut-danger');//Описываем состояние ошибки
            setamountH1('h1styleRed');
  };
    break;


    case 'alpha':
      setalphaClean(true);
      //Как сделать чтобы выражение g12g213 тоже не валидировалась. || !alpha.replace(/[^\d.]/g, '') || !alpha.replace(/[^+\d]/g, '') || !alpha.replace(/[a-zA-Z]/) || alpha.replace(/[a-zA-Zа-яА-Я]/)
        if (!alpha.trim() || alpha <= 0.00001 || alpha >= 100000 || !alpha.replace(/[^\d.]/g, '') || !alpha.replace(/[^+\d]/g, '')){
          setalphaError('Error Некорректное значение объёма');//Описываем состояние ошибки
          setalphaClass('inPut inPut-design inPut-danger');//Описываем состояние ошибки
          setalphaH1('h1styleRed');
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

const alphaHandler = (e) => {
  setalpha(e.target.value);
  console.log(e.target.value);
    if (!alpha.trim()){} else 
    console.log('корректное');
    setalphaH1('h1styleTrue');
    setalphaError('Корректное значение');//Описываем состояние правильного ввода
    setalphaClass('inPut inPut-design inPut-true');//Описываем состояние правильного ввода
};

const amountHandler = (e) => {
  setamount(e.target.value);
  console.log(e.target.value);
    if (!amount.trim()){} else 
    console.log('корректное');
    setamountH1('h1styleTrue');
    setamountError('Корректное значение');//Описываем состояние правильного ввода
    setamountClass('inPut inPut-design inPut-true');//Описываем состояние правильного ввода
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

function ibuHandler(){};

//Handlers


// Calculate 
// IBU calс 
function IBU(){
  var ibu = ((amount * alpha) / (volume * 0.1))*(KOEF(OGSG(plato), (boil - timeHops)));
  var parsIBU = parseFloat(ibu.toFixed(1));
  return "Хмель: " + nameHops + " IBU= " +  parsIBU
};


//  IBU calс
//OGSG Функция пересчёта OG в SG
function OGSG(plato) {
  if (plato >= 1.09){
        var sg = (1 + (plato / (258.6 - (((plato) / 258.2) * 227.1))));
            var parsSG = parseFloat(sg.toFixed(2));
            return parsSG
      } 
      else return plato
};
//OGSG Функция пересчёта OG в SG



//KOEF функция расчета коэффицента изомеризации
function KOEF (plato, timeHops) {
  var koef
  var KOEF_1 = [0.055, 0.1, 0.137, 0.167, 0.212, 0.242, 0.276, 0.291, 0.295, 0.301];
  if (plato <= 1.0301) {
      if (timeHops <=5.1){koef = KOEF_1[0]};
      if (timeHops <= 10.1 && timeHops >=5.1){koef = KOEF_1[1]};
      if (timeHops <= 15.1 && timeHops >=10.1){koef = KOEF_1[2]};
      if (timeHops <= 20.1 && timeHops >=15.1){koef = KOEF_1[3]};
      if (timeHops <= 30.1 && timeHops >=20.1){koef = KOEF_1[4]};
      if (timeHops <= 40.1 && timeHops >=30.1){koef = KOEF_1[5]};
      if (timeHops <= 60.1 && timeHops >=40.1){koef = KOEF_1[6]};
      if (timeHops <= 80.1 && timeHops >=60.1){koef = KOEF_1[7]};
      if (timeHops <= 90.1 && timeHops >=80.1){koef = KOEF_1[8]};
      if (timeHops <= 120.1 && timeHops >=90.1){koef = KOEF_1[9]};
      if (timeHops <= 300.1 && timeHops >=120.1){koef = KOEF_1[9]};
      console.log('Итого koef = ' + koef);
      return koef
  };

  var KOEF_2 = [0.05, 0.091, 0.125, 0.153, 0.194, 0.221, 0.252, 0.266, 0.27, 0.275];
  if (plato <= 1.0401) {
      if (timeHops <=5.1){koef = KOEF_2[0]};
      if (timeHops <= 10.1 && timeHops >=5.1){koef = KOEF_2[1]};
      if (timeHops <= 15.1 && timeHops >=10.1){koef = KOEF_2[2]};
      if (timeHops <= 20.1 && timeHops >=15.1){koef = KOEF_2[3]};
      if (timeHops <= 30.1 && timeHops >=20.1){koef = KOEF_2[4]};
      if (timeHops <= 40.1 && timeHops >=30.1){koef = KOEF_2[5]};
      if (timeHops <= 60.1 && timeHops >=40.1){koef = KOEF_2[6]};
      if (timeHops <= 80.1 && timeHops >=60.1){koef = KOEF_2[7]};
      if (timeHops <= 90.1 && timeHops >=80.1){koef = KOEF_2[8]};
      if (timeHops <= 120.1 && timeHops >=90.1){koef = KOEF_2[9]};
      if (timeHops <= 300.1 && timeHops >=120.1){koef = KOEF_2[9]};
      console.log('Итого koef = ' + koef);
      return koef
  };

  var KOEF_3 = [0.046, 0.084, 0.114, 0.14, 0.177, 0.202, 0.231, 0.243, 0.247, 0.252];
  if (plato <= 1.0501) {
      if (timeHops <=5.1){koef = KOEF_3[0]};
      if (timeHops <= 10.1 && timeHops >=5.1){koef = KOEF_3[1]};
      if (timeHops <= 15.1 && timeHops >=10.1){koef = KOEF_3[2]};
      if (timeHops <= 20.1 && timeHops >=15.1){koef = KOEF_3[3]};
      if (timeHops <= 30.1 && timeHops >=20.1){koef = KOEF_3[4]};
      if (timeHops <= 40.1 && timeHops >=30.1){koef = KOEF_3[5]};
      if (timeHops <= 60.1 && timeHops >=40.1){koef = KOEF_3[6]};
      if (timeHops <= 80.1 && timeHops >=60.1){koef = KOEF_3[7]};
      if (timeHops <= 90.1 && timeHops >=80.1){koef = KOEF_3[8]};
      if (timeHops <= 120.1 && timeHops >=90.1){koef = KOEF_3[9]};
      if (timeHops <= 300.1 && timeHops >=120.1){koef = KOEF_3[9]};
      console.log('Итого koef = ' + koef);
      return koef
  };

  var KOEF_4 = [0.042, 0.076, 0.105, 0.128, 0.162, 0.185, 0.211, 0.222, 0.226, 0.23];
  if (plato <= 1.0601) {
      if (timeHops <=5.1){koef = KOEF_4[0]};
      if (timeHops <= 10.1 && timeHops >=5.1){koef = KOEF_4[1]};
      if (timeHops <= 15.1 && timeHops >=10.1){koef = KOEF_4[2]};
      if (timeHops <= 20.1 && timeHops >=15.1){koef = KOEF_4[3]};
      if (timeHops <= 30.1 && timeHops >=20.1){koef = KOEF_4[4]};
      if (timeHops <= 40.1 && timeHops >=30.1){koef = KOEF_4[5]};
      if (timeHops <= 60.1 && timeHops >=40.1){koef = KOEF_4[6]};
      if (timeHops <= 80.1 && timeHops >=60.1){koef = KOEF_4[7]};
      if (timeHops <= 90.1 && timeHops >=80.1){koef = KOEF_4[8]};
      if (timeHops <= 120.1 && timeHops >=90.1){koef = KOEF_4[9]};
      if (timeHops <= 300.1 && timeHops >=120.1){koef = KOEF_4[9]};
      console.log('Итого koef = ' + koef);
      return koef
  };

  var KOEF_5 = [0.038, 0.070, 0.096, 0.117, 0.148, 0.169, 0.193, 0.203, 0.206, 0.21];
  if (plato <= 1.0701 || plato >= 1.0701) {
      if (timeHops <=5.1){koef = KOEF_5[0]};
      if (timeHops <= 10.1 && timeHops >=5.1){koef = KOEF_5[1]};
      if (timeHops <= 15.1 && timeHops >=10.1){koef = KOEF_5[2]};
      if (timeHops <= 20.1 && timeHops >=15.1){koef = KOEF_5[3]};
      if (timeHops <= 30.1 && timeHops >=20.1){koef = KOEF_5[4]};
      if (timeHops <= 40.1 && timeHops >=30.1){koef = KOEF_5[5]};
      if (timeHops <= 60.1 && timeHops >=40.1){koef = KOEF_5[6]};
      if (timeHops <= 80.1 && timeHops >=60.1){koef = KOEF_5[7]};
      if (timeHops <= 90.1 && timeHops >=80.1){koef = KOEF_5[8]};
      if (timeHops <= 120.1 && timeHops >=90.1){koef = KOEF_5[9]};
      if (timeHops <= 300.1 && timeHops >=120.1){koef = KOEF_5[9]};
      console.log('Итого koef = ' + koef);
      return koef
  };
};
//KOEF функция расчета коэффицента изомеризации

//  var ibu = ((amount * alpha) / (volume * 0.1)) * 0.21
//   return ibu
// }
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
                <LI/><input name="volume" placeholder='Введите объем сусла, л' className={volumeClass} type="number" value={volume} onChange={e=>volumeHandler(e)} onBlur={blurHandler}/>
                {(volumeClean && volumeError) && <h1 className={volumeh1} >{volumeError}</h1>}

                <span className={span}><LI/><input name="plato" placeholder="Введите плотность" className={platoClass} type="number" value={plato} onChange={e=>platoHandler(e)} onBlur={blurHandler}/></span>
                <span className={span2}><LI/><input name="sg" placeholder={placeholderSG} className={platoClass} type="number" value={plato} onChange={e=>platoHandler(e)} onBlur={blurHandler}/></span>
                  <button name='PLATO' className={butPlato} onClick={Submit} type="radio">Plato</button>
                  <button name='SG' className={butOG} onClick={Submit} type="radio">SG</button>
                  {(platoClean && platoError) && <h1 className={platoh1} >{platoError}</h1>}

                  <LI/><input name="nameHops" placeholder='Наименование хмеля' className={nameHopsClass} type="text" value={nameHops} onChange={e=>nameHopsHandler(e)} onBlur={blurHandler}/>
                {(nameHopsClean && nameHopsError) && <h1 className={nameHopsh1} >{nameHopsError}</h1>}

                <LI/><input name="boil" placeholder='Кипячение сусла, мин' className={boilClass} type="number" value={boil} onChange={e=>boilHandler(e)} onBlur={blurHandler}/>
                {(boilClean && boilError) && <h1 className={boilh1} >{boilError}</h1>}

                <LI/><input name="alpha" placeholder='Альфа кислота, %' className={alphaClass} type="number" value={alpha} onChange={e=>alphaHandler(e)} onBlur={blurHandler}/>
                {(alphaClean && alphaError) && <h1 className={alphah1} >{alphaError}</h1>}

                <LI/><input name="amount" placeholder='Кол-во, г' className={amountClass} type="number" value={amount} onChange={e=>amountHandler(e)} onBlur={blurHandler}/>
                {(amountClean && amountError) && <h1 className={amounth1} >{amountError}</h1>}


                <LI/><input name="timeHops" placeholder='Время внесения хмеля, мин' className={timeHopsClass} type="number" value={timeHops} onChange={e=>timeHopsHandler(e)} onBlur={blurHandler}/>
                {(timeHopsClean && timeHopsError) && <h1 className={timeHopsh1} >{timeHopsError}</h1>}


                <LI/><button className='inPut button1' id="buttonNEXT" type="submit">Посчитать IBU</button>  
              </form>
              <LI/><input placeholder="IBU" className="inPut inPut-design" value={ibuSubmit} onChange={ibuHandler}/>
            </ul>
        </div>
    </div>
  </div> 
  )};
    

export default App;