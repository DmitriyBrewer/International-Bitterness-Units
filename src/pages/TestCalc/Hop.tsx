import React, {useState} from 'react'
import PharamInput from './PharamInput';
import Slider from "@mui/material/Slider";

//redux
import { useSelector, useDispatch } from "react-redux";
import HOP from "../../store/reducer/hopPharamSlice";
import { AppDispatch, AppState, RootState } from "../../store/store";
//redux

import {Calc} from '../CalculatorIBU/CalcFunc'

import {alphaValidations, amountValidations, timeValidations, timeHopValidations, temperatureValidations, ibuValidations} from './ValidationPharam'

interface IHop {
    hopElement:{
        id:string;
        nameHop:string;
        alpha:string;
        amount:string;
        time:string;
        hopStand:string;
        alphaValidation: boolean | undefined;
        amountValidation: boolean | undefined;
        timeValidation: boolean | undefined;
        hopStandValidation: boolean | undefined;
        ibu: undefined | number | string
    };
}

const Hop: React.FC<IHop> = ({hopElement}) => {
   //Redux
    const dispatch: AppDispatch = useDispatch();
    const Hop = useSelector((state: AppState) => state.hop);
    //Redux
    
    const [pharam, setPharam] = React.useState(hopElement);

    const hopIBU = Calc(pharam.nameHop, pharam.alpha, pharam.amount, pharam.time, Hop.wort.volume, Hop.wort.destiny, Hop.wort.boil)

    const allValidation = pharam.alphaValidation&&pharam.amountValidation&&pharam.timeValidation&&Hop.wort.volumeValidation&&Hop.wort.destinyValidation&&Hop.wort.boilValidation

    const ibuValidation = ibuValidations(allValidation, hopIBU)

    React.useEffect(()=>{
        ibuCalc() 
    },[ibuValidation])

    React.useMemo(()=>{
        setTimeout(()=>{
            dispatch(HOP.actions.getPharamHopBoil(pharam))
        },0)
      },[pharam]);
    
    function handleChange (e:any) {
        const {name, value} = e.target
        setPharam((prevState:any)=>{
            return {...prevState, [name]: value}
        })
    };
    
    const deleteHopBoil = () => {
    dispatch(HOP.actions.deleteHopBoil(pharam.id))
    };

    const ValidationAlpha = () => {
    setPharam({...pharam, alphaValidation:alphaValidations(pharam.alpha)})
    };

    const ValidationAmount = () => {
    setPharam({...pharam, amountValidation:amountValidations(pharam.amount)})
    };

    const ValidationTime = () => {
    setPharam({...pharam, timeValidation:timeValidations(pharam.time, Hop.wort.boil)})
    };

    const ibuCalc = () => {
        setPharam({...pharam, ibu: ibuValidation})
    }
    console.log(Hop);
    
    
    return (
        <React.Fragment>
        <main>
        <h1>Введите параметры на варку</h1>
        <h1>IBU:{ibuValidation}</h1>
            <PharamInput onChange={handleChange} value={pharam.nameHop} name='nameHop' types='text'/>
            <PharamInput onChange={handleChange} value={pharam.alpha} name='alpha' onBlur={ValidationAlpha} validation={pharam.alphaValidation}/>
            <PharamInput onChange={handleChange} value={pharam.amount} name='amount' onBlur={ValidationAmount} validation={pharam.amountValidation}/>
            <PharamInput onChange={handleChange} value={pharam.time} name='time' onBlur={ValidationTime} validation={pharam.timeValidation}/>
            <button type='button' onClick={deleteHopBoil}>delete</button>
        </main>
        <Slider color="secondary" sx={{ width: "90%" }} 
            min={0.1}
            max={Number(7000)}
            value={Number(pharam.amount)}
            onChange={handleChange}
            name='amount'
            />
        </React.Fragment>
    );
    };

    const HopStand: React.FC<IHop> = ({hopElement}) => {
        //Redux
        const dispatch: AppDispatch = useDispatch();
        const Hop = useSelector((state: AppState) => state.hop);
        //Redux
    
        const [pharam, setPharam] = React.useState(hopElement);

        const hopIBU = Calc(pharam.nameHop, pharam.alpha, pharam.amount, pharam.time, Hop.wort.volume, Hop.wort.destiny, Hop.wort.boil)

    const allValidation = pharam.alphaValidation&&pharam.amountValidation&&pharam.timeValidation&&Hop.wort.volumeValidation&&Hop.wort.destinyValidation&&Hop.wort.boilValidation

    const ibuValidation = ibuValidations(allValidation, hopIBU)

    React.useEffect(()=>{
        ibuCalc() 
    },[ibuValidation])

        React.useMemo(()=>{
            setTimeout(()=>{
                dispatch(HOP.actions.getPharamHopStand(pharam))
            },0)
          },[pharam]);
    
        function handleChange (e:any) {
        const {name, value} = e.target
        setPharam((prevState:any)=>{
            return {...prevState, [name]: value}
        })
        }
        
        const deleteHopStand = () => {
        console.log(Hop);
        dispatch(HOP.actions.deleteHopStand(pharam.id))
        };

        const ValidationAlpha = () => {
        setPharam({...pharam, alphaValidation:alphaValidations(pharam.alpha)})
        };
    
        const ValidationAmount = () => {
        setPharam({...pharam, amountValidation:amountValidations(pharam.amount)})
        };
    
        const ValidationTime = () => {
        setPharam({...pharam, timeValidation:timeHopValidations(pharam.time)})
        };

        const ValidationHopStand = () => {
        setPharam({...pharam, hopStandValidation:temperatureValidations(pharam.hopStand)})
        };

        const ibuCalc = () => {
            setPharam({...pharam, ibu: ibuValidation})
        }        

        return (
            <React.Fragment>
            <main>
            <h1>Введите параметры на вирпул</h1>
            <h1>{ibuValidation}</h1>
                <PharamInput onChange={handleChange} value={pharam.nameHop} name='nameHop' types='text'/>
                <PharamInput onChange={handleChange} value={pharam.alpha} name='alpha' onBlur={ValidationAlpha} validation={pharam.alphaValidation}/>
                <PharamInput onChange={handleChange} value={pharam.amount} name='amount' onBlur={ValidationAmount} validation={pharam.amountValidation}/>
                <PharamInput onChange={handleChange} value={pharam.time} name='time' onBlur={ValidationTime} validation={pharam.timeValidation}/>
                <PharamInput onChange={handleChange} value={pharam.hopStand} name='hopStand' onBlur={ValidationHopStand} validation={pharam.hopStandValidation}/>
                <button type='button' onClick={deleteHopStand}>delete</button>
            </main>
            <Slider color="secondary" sx={{ width: "90%" }} 
            min={0.1}
            max={Number(7000)}
            value={Number(pharam.amount)}
            onChange={handleChange}
            name='amount'
            />
            </React.Fragment>
        );
        };


const HopList: React.FC = () => {
    const Hops = useSelector((state: AppState) => state.hop); 

    return (
      <React.Fragment>
        {Hops.hopBoil.map((element: any) => {
        return (<Hop key={element.id} hopElement={element}/>)

        })}

        {Hops.hopStand.map((element: any) => {
        return (<HopStand key={element.id} hopElement={element}/>)

        })}      
        </React.Fragment>
    );
  };
  
  export default HopList;