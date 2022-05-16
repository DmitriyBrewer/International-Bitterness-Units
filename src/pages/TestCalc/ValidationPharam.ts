export const volumeValidations = (volume: string | undefined):boolean|undefined => {
  if(volume === undefined) {
    return false
  } 
  if (volume !== undefined) {
    if (parseInt(volume, 10) < 100000 && parseInt(volume, 10) !== 0 && parseInt(volume, 10) >=0 ) {
      return false;
    } else return true
  } 
};

export const destinyValidations = (
  destiny: string | undefined,
  destinyType: string | undefined
) => {
  if(destiny === undefined) {
    return false
  }
  if (destiny !== undefined) {
    if (destinyType === "plato") {
      if (
        destiny &&
        parseFloat(destiny) >= parseFloat("0.5") &&
        parseFloat(destiny) <= parseFloat("40")
      ) {
        return false;
      } else return true;
    }
    if (destinyType === "sg") {
      if (
        destiny &&
        parseFloat(destiny) >= parseFloat("1.002") &&
        parseFloat(destiny) <= parseFloat("1.179")
      ) {
        return false;
      } else return true;
    }
  }
};

export const boilValidations = (boil: string | undefined) => {
  if(boil === undefined) {
    return false
  }
  if (boil !== undefined) {
    if (parseFloat(boil) <= 200 && parseFloat(boil) >=0) {
      return false;
    } else return true;
  }
};

export const wortValidations = (volumeValidation:any, destinyValidation:any, boilValidation:any, volume:string|undefined, destiny:string|undefined, boil:string|undefined) => {
  if(volumeValidation===undefined||destinyValidation===undefined||boilValidation===undefined||volume===undefined||destiny===undefined||boil===undefined ) {
    return true
  } else return volumeValidation||destinyValidation||boilValidation
};

export const alphaValidations = (alpha: string | undefined) => {
  if(alpha === undefined) {
    return false
  }
  if (alpha !== undefined) {
    if (parseFloat(alpha) >= parseFloat("0.1")) {
      return false;
    } else return true;
  }
};

export const amountValidations = (amount: string | undefined) => {
  if(amount === undefined) {
    return false
  }
  if (amount !== undefined) {
    if (parseFloat(amount) >= 0) {
      return false;
    } else return true;
  }
};

export const timeValidations = (
  time: string | undefined,
  boil: string | undefined
) => {
  if(boil === undefined || time === undefined) {
    return false
  }
  if (boil !== undefined && time !== undefined) {
    if (boil !== "" && parseInt(time, 10) <= parseInt(boil, 10)) {
      return false;
    }
    else return true;
  }
};

export const disableTimeInput = (boil: string | undefined, hopStand: boolean) => {
  if (hopStand === false) {
    if(boil === undefined) {
      return true
    }
    if (boil !== undefined) {
      if (parseFloat(boil) <= 200 && parseFloat(boil) >=0) {
        return false;
      } else return true;
    }
  } else return false
};

export const timeHopValidations = (time: string | undefined) => {
  if(time === undefined) {
    return false
  }
  if (time !== undefined) {
    if (parseInt(time, 10) <= 100 && parseInt(time, 10) >= 0) {
      return false;
    } else return true;
  }
};

export const temperatureValidations = (temperature: string | undefined) => {
  if(temperature === undefined) {
    return false
  }
  if (temperature !== undefined) {
    if (parseInt(temperature, 10) <= 100 && parseInt(temperature, 10) >= 0) {
      return false;
    } else return true;
  }
};

export const ibuValidations = (
  error: boolean | undefined,
  IBU: number | undefined
) => {
  if (error === true) {
    return 0;
  }
  if ( error === undefined) {
    return IBU;
  }
  if (error === false ) {
    return IBU;
  }
};

export const textHopIBU = (volume:string|undefined, destiny:string|undefined, boil:string|undefined, alpha:string|undefined, amount:string|undefined, time:string|undefined,hopStand:string|undefined, IBU:number|string, Error:boolean|undefined, hopStandError: boolean|undefined  ) => {
  if (hopStandError) {
    if (volume && destiny && boil && alpha && amount && time && hopStand) {
      if(Error||hopStandError === true) {
        return '⛔'
      }
      return IBU
    }
    if(Error||hopStandError === true) {
      // return 'Введите корректные параметры'
      return '⛔'
    }
    else return 'Введите параметры'
  }

  if (volume && destiny && boil && alpha && amount && time) {
    if(Error === true) {
      return '⛔'
    }
    return IBU
  }
  if(Error === true) {
    return '⛔'
  }
  else return 'Введите параметры'
};    


export const helperTextValidations = (error: boolean | undefined, value: string | undefined, errorText:string, validText:string, initialText:string) => {
  if (error === true) {
    return errorText;
  }
  if (error === false && value !== undefined) {
    return validText;
  }
  if (value === undefined && error === false || value === '0' || value === '') {
    return initialText;
  }
};

export const helperTextWort = {
  volume:{
    initialText:'Объём от 0 до 100 000, л',
    errorText:'❌ Объём от 0 до 100 000, л',
    validText:'✅ Верное значение'
  },
  destinyPlato:{
    initialText:"Введите Plato от 0.5 до 40",
    errorText:"❌ Plato от 0.5 до 40",
    validText:"✅ Верное значение"
  },
  destinySG:{
    initialText:"Введите SG от 1.002 до 1.179",
    errorText:'❌ SG от 1.002 до 1.179',
    validText:"✅ Верное значение"
  },
  boil:{
    initialText:'Кипячение от 0 до 200 мин',
    errorText:'❌ Кипячение от 0 до 200 мин',
    validText:'✅ Верное значение'
  },
};

export const helperTextHop = {
  name:{
    initialText:'',
    errorText:'',
    validText:''
  },
  alpha:{
    initialText:'Введите от 0.1 до ∞',
    errorText:'❌ от 0.1 до ∞',
    validText:'✅ Верное значение'
  },
  amount:{
    initialText:'Введите от 0 до ∞',
    errorText:'❌ от 0 до ∞',
    validText:'✅ Верное значение'
  },
  time:{
    initialText:'⚠️ от 0 до Время кипячения',
    errorText:'❌ от 0 до Время кипячения',
    validText:'✅ Верное значение'
  },
  hopStand:{
    initialText:'от 0 до 100, м',
    errorText:'❌ от 0 до 100, м',
    validText:'✅ Верное значение'
  },
};