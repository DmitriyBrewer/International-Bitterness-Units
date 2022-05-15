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
    return 0;
  }
  if (error === false ) {
    return IBU;
  }
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