export const Calc = (
    name,
    alpha,
    amount,
    time,
    wortvolume,
    wortdestiny,
    wortboil
  ) => {
    const volume = parseInt(wortvolume, 10);
    const destiny = parseFloat(wortdestiny);
    const boil = parseInt(wortboil, 10);
    const name1 = name;
    const hopamount1 = parseInt(amount, 10);
    const alphahop1 = parseInt(alpha, 10);
    const time1 = parseInt(time, 10);
  
    function OGSG(plato) {
      // console.log(plato);
      if (plato > parseFloat("1.09")) {
        var sg = 1 + plato / (258.6 - (plato / 258.2) * 227.1);
        var parsSG = parseFloat(sg.toFixed(2));
        return parsSG;
      } else return plato;
    }
  
    function KOEF(plato, timeHops) {
      var koef;
      var KOEF_1 = [
        0.055,
        0.1,
        0.137,
        0.167,
        0.212,
        0.242,
        0.276,
        0.291,
        0.295,
        0.301
      ];
      if (plato <= 1.0301) {
        if (timeHops <= 5.1) {
          koef = KOEF_1[0];
        }
        if (timeHops <= 10.1 && timeHops >= 5.1) {
          koef = KOEF_1[1];
        }
        if (timeHops <= 15.1 && timeHops >= 10.1) {
          koef = KOEF_1[2];
        }
        if (timeHops <= 20.1 && timeHops >= 15.1) {
          koef = KOEF_1[3];
        }
        if (timeHops <= 30.1 && timeHops >= 20.1) {
          koef = KOEF_1[4];
        }
        if (timeHops <= 40.1 && timeHops >= 30.1) {
          koef = KOEF_1[5];
        }
        if (timeHops <= 60.1 && timeHops >= 40.1) {
          koef = KOEF_1[6];
        }
        if (timeHops <= 80.1 && timeHops >= 60.1) {
          koef = KOEF_1[7];
        }
        if (timeHops <= 90.1 && timeHops >= 80.1) {
          koef = KOEF_1[8];
        }
        if (timeHops <= 120.1 && timeHops >= 90.1) {
          koef = KOEF_1[9];
        }
        if (timeHops <= 300.1 && timeHops >= 120.1) {
          koef = KOEF_1[9];
        }
        return koef;
      }
  
      var KOEF_2 = [
        0.05,
        0.091,
        0.125,
        0.153,
        0.194,
        0.221,
        0.252,
        0.266,
        0.27,
        0.275
      ];
      if (plato <= 1.0401) {
        if (timeHops <= 5.1) {
          koef = KOEF_2[0];
        }
        if (timeHops <= 10.1 && timeHops >= 5.1) {
          koef = KOEF_2[1];
        }
        if (timeHops <= 15.1 && timeHops >= 10.1) {
          koef = KOEF_2[2];
        }
        if (timeHops <= 20.1 && timeHops >= 15.1) {
          koef = KOEF_2[3];
        }
        if (timeHops <= 30.1 && timeHops >= 20.1) {
          koef = KOEF_2[4];
        }
        if (timeHops <= 40.1 && timeHops >= 30.1) {
          koef = KOEF_2[5];
        }
        if (timeHops <= 60.1 && timeHops >= 40.1) {
          koef = KOEF_2[6];
        }
        if (timeHops <= 80.1 && timeHops >= 60.1) {
          koef = KOEF_2[7];
        }
        if (timeHops <= 90.1 && timeHops >= 80.1) {
          koef = KOEF_2[8];
        }
        if (timeHops <= 120.1 && timeHops >= 90.1) {
          koef = KOEF_2[9];
        }
        if (timeHops <= 300.1 && timeHops >= 120.1) {
          koef = KOEF_2[9];
        }
        return koef;
      }
  
      var KOEF_3 = [
        0.046,
        0.084,
        0.114,
        0.14,
        0.177,
        0.202,
        0.231,
        0.243,
        0.247,
        0.252
      ];
      if (plato <= 1.0501) {
        if (timeHops <= 5.1) {
          koef = KOEF_3[0];
        }
        if (timeHops <= 10.1 && timeHops >= 5.1) {
          koef = KOEF_3[1];
        }
        if (timeHops <= 15.1 && timeHops >= 10.1) {
          koef = KOEF_3[2];
        }
        if (timeHops <= 20.1 && timeHops >= 15.1) {
          koef = KOEF_3[3];
        }
        if (timeHops <= 30.1 && timeHops >= 20.1) {
          koef = KOEF_3[4];
        }
        if (timeHops <= 40.1 && timeHops >= 30.1) {
          koef = KOEF_3[5];
        }
        if (timeHops <= 60.1 && timeHops >= 40.1) {
          koef = KOEF_3[6];
        }
        if (timeHops <= 80.1 && timeHops >= 60.1) {
          koef = KOEF_3[7];
        }
        if (timeHops <= 90.1 && timeHops >= 80.1) {
          koef = KOEF_3[8];
        }
        if (timeHops <= 120.1 && timeHops >= 90.1) {
          koef = KOEF_3[9];
        }
        if (timeHops <= 300.1 && timeHops >= 120.1) {
          koef = KOEF_3[9];
        }
        return koef;
      }
  
      var KOEF_4 = [
        0.042,
        0.076,
        0.105,
        0.128,
        0.162,
        0.185,
        0.211,
        0.222,
        0.226,
        0.23
      ];
      if (plato <= 1.0601) {
        if (timeHops <= 5.1) {
          koef = KOEF_4[0];
        }
        if (timeHops <= 10.1 && timeHops >= 5.1) {
          koef = KOEF_4[1];
        }
        if (timeHops <= 15.1 && timeHops >= 10.1) {
          koef = KOEF_4[2];
        }
        if (timeHops <= 20.1 && timeHops >= 15.1) {
          koef = KOEF_4[3];
        }
        if (timeHops <= 30.1 && timeHops >= 20.1) {
          koef = KOEF_4[4];
        }
        if (timeHops <= 40.1 && timeHops >= 30.1) {
          koef = KOEF_4[5];
        }
        if (timeHops <= 60.1 && timeHops >= 40.1) {
          koef = KOEF_4[6];
        }
        if (timeHops <= 80.1 && timeHops >= 60.1) {
          koef = KOEF_4[7];
        }
        if (timeHops <= 90.1 && timeHops >= 80.1) {
          koef = KOEF_4[8];
        }
        if (timeHops <= 120.1 && timeHops >= 90.1) {
          koef = KOEF_4[9];
        }
        if (timeHops <= 300.1 && timeHops >= 120.1) {
          koef = KOEF_4[9];
        }
        return koef;
      }
  
      var KOEF_5 = [
        0.038,
        0.07,
        0.096,
        0.117,
        0.148,
        0.169,
        0.193,
        0.203,
        0.206,
        0.21
      ];
      if (plato <= 1.0701 || plato >= 1.0701) {
        if (timeHops <= 5.1) {
          koef = KOEF_5[0];
        }
        if (timeHops <= 10.1 && timeHops >= 5.1) {
          koef = KOEF_5[1];
        }
        if (timeHops <= 15.1 && timeHops >= 10.1) {
          koef = KOEF_5[2];
        }
        if (timeHops <= 20.1 && timeHops >= 15.1) {
          koef = KOEF_5[3];
        }
        if (timeHops <= 30.1 && timeHops >= 20.1) {
          koef = KOEF_5[4];
        }
        if (timeHops <= 40.1 && timeHops >= 30.1) {
          koef = KOEF_5[5];
        }
        if (timeHops <= 60.1 && timeHops >= 40.1) {
          koef = KOEF_5[6];
        }
        if (timeHops <= 80.1 && timeHops >= 60.1) {
          koef = KOEF_5[7];
        }
        if (timeHops <= 90.1 && timeHops >= 80.1) {
          koef = KOEF_5[8];
        }
        if (timeHops <= 120.1 && timeHops >= 90.1) {
          koef = KOEF_5[9];
        }
        if (timeHops <= 300.1 && timeHops >= 120.1) {
          koef = KOEF_5[9];
        }
        return koef;
      }
    }
    var ibu =
      ((hopamount1 * alphahop1) / (volume * 0.1)) *
      KOEF(OGSG(destiny), boil - time1);
    const parsIBU1 = parseFloat(ibu.toFixed(1));
    const IBU = parsIBU1 || 0;
  
    return IBU;
  };
  