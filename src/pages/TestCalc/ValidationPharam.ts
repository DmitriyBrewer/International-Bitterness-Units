export const volumeValidations = (volume: string | undefined) => {
  if(volume === undefined) {
    return true
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
    return true
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
    return true
  }
  if (boil !== undefined) {
    if (parseFloat(boil) <= 200 && parseFloat(boil) >=0) {
      return false;
    } else return true;
  }

};

export const alphaValidations = (alpha: string | undefined) => {
  if(alpha === undefined) {
    return true
  }
  if (alpha !== undefined) {
    if (parseFloat(alpha) >= parseFloat("0.1")) {
      return false;
    } else return true;
  }
};

export const amountValidations = (amount: string | undefined) => {
  if(amount === undefined) {
    return true
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
  if(boil === undefined&& time === undefined) {
    return true
  }
  if (boil !== undefined && time !== undefined) {
    if (boil !== "" && parseInt(time, 10) <= parseInt(boil, 10)) {
      return false;
    } else return true;
  }
};

export const timeHopValidations = (time: string | undefined) => {
  if(time === undefined) {
    return true
  }
  if (time !== undefined) {
    if (parseInt(time, 10) <= 100 && parseInt(time, 10) >= 0) {
      return false;
    } else return true;
  }
};

export const temperatureValidations = (temperature: string | undefined) => {
  if(temperature === undefined) {
    return true
  }
  if (temperature !== undefined) {
    if (parseInt(temperature, 10) <= 100 && parseInt(temperature, 10) >= 0) {
      return false;
    } else return true;
  }
};

export const ibuValidations = (
  validation: boolean | undefined,
  IBU: number | undefined
) => {
  if (validation === true) {
    return "Введите корректные данные";
  }
  if (validation === false || validation === undefined) {
    return IBU || "Введите данные";
  }
};
