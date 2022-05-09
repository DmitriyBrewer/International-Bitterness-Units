export const volumeValidations = (volume: string | undefined) => {
  if (volume !== undefined) {
    if (parseInt(volume, 10) < 100000 && parseInt(volume, 10) !== 0) {
      return true;
    } else return false;
  }
};

export const destinyValidations = (
  destiny: string | undefined,
  destinyType: string | undefined
) => {
  if (destiny !== undefined) {
    if (destinyType === "plato") {
      if (
        destiny &&
        parseFloat(destiny) >= parseFloat("0.5") &&
        parseFloat(destiny) <= parseFloat("40")
      ) {
        return true;
      } else return false;
    }
    if (destinyType === "sg") {
      if (
        destiny &&
        parseFloat(destiny) >= parseFloat("1.002") &&
        parseFloat(destiny) <= parseFloat("1.179")
      ) {
        return true;
      } else return false;
    }
  }
};

export const boilValidations = (boil: string | undefined) => {
  if (boil !== undefined) {
    if (parseFloat(boil) <= 200) {
      return true;
    } else return false;
  }
};

export const alphaValidations = (alpha: string | undefined) => {
  if (alpha !== undefined) {
    if (parseFloat(alpha) >= parseFloat("0.1")) {
      return true;
    } else return false;
  }
};

export const amountValidations = (amount: string | undefined) => {
  if (amount !== undefined) {
    if (parseFloat(amount) >= 0) {
      return true;
    } else return false;
  }
};

export const timeValidations = (
  time: string | undefined,
  boil: string | undefined
) => {
  if (boil !== undefined && time !== undefined) {
    if (boil !== "" && parseInt(time, 10) <= parseInt(boil, 10)) {
      return true;
    } else return false;
  }
};

export const timeHopValidations = (time: string | undefined) => {
  if (time !== undefined) {
    if (parseInt(time, 10) <= 100) {
      return true;
    } else return false;
  }
};

export const temperatureValidations = (temperature: string | undefined) => {
  if (temperature !== undefined) {
    if (parseInt(temperature, 10) <= 100) {
      return true;
    } else return false;
  }
};

export const ibuValidations = (
  validation: boolean | undefined,
  IBU: number | undefined
) => {
  if (validation === false) {
    return "Введите корректные данные";
  }
  if (validation === true || validation === undefined) {
    return IBU || "Введите данные";
  }
};
