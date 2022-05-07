import * as React from "react";
import { useEffect } from "react";
//Components
import Wort from "./Wort";
import HopList from "./HopList";
import ResultTextField from "./ResultTextField";
//Components

//MUI
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
//MUI

//redux
import { useSelector, useDispatch } from "react-redux";
import HOPS from "../../store/reducer/hopSlice";
import { AppDispatch, AppState, RootState } from "../../store/store";
//redux

const CalculatorIBU: React.FC = () => {
  //Redux
  const dispatch: AppDispatch = useDispatch();
  const Hops = useSelector((state: AppState) => state.hops);
  console.log(Hops);
  //Redux
  //wort redux
  let ReduxValueWort = {
    volume: "",
    destiny: "",
    boil: "",
    reduceIBU: "",
    reduceIbuHopsStand:"",
    reduceIbuBoil:"",
  };
  Hops.forEach((element: any) => {
    ReduxValueWort = {
      volume: element.volume,
      destiny: element.destiny,
      boil: element.boil,
      reduceIBU: element.reduceIBU,
      reduceIbuHopsStand:element.reduceIbuHopsStand,
      reduceIbuBoil:element.reduceIbuBoil
    };
  });
  //wort redux
  // console.log(ReduxValueWort.reduceIbuBoil);
  // console.log(ReduxValueWort.reduceIbuHopsStand);
  // console.log(ReduxValueWort.reduceIBU);

  
  const ibuAddHopAndValidation = (event:any) => {
    //addHop
    event.preventDefault()
    // dispatch(HOPS.actions.addHop());
    //addHop
    // dispatch(HOPS.actions.addIBU(IBU));
    //Validation
    dispatch(HOPS.actions.calcIBU());
    dispatch(HOPS.actions.concatIBU());
    dispatch(HOPS.actions.volumeValidation());
    dispatch(HOPS.actions.destinyValidation());
    dispatch(HOPS.actions.boilValidation());
    //Validation
  };

  useEffect(() => {
    dispatch(
      HOPS.actions.mountWort({
        plato: true,
        sg: false,
        id: "wort"
      })
    );
  }, []);

  return (
    <React.Fragment >
      <CssBaseline />
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        textAlign="center"
      >
        <Container maxWidth="sm">
          <Alert variant="filled" severity="info" style={{ marginTop: "20px", justifyContent:'center' }}>
            Для начала работы введите параметры сусла, нажмите кнопку добавить хмель и выберите хмель
          </Alert>
        </Container>
        <Typography variant="h4" component="h1" sx={{ marginTop: "10px" }}>
        Калькулятор IBU
      </Typography>
        <Wort />
        <HopList />
        {Hops.length !== 1 ?
      <ResultTextField ibuValue={ReduxValueWort.reduceIBU} ibuBoil={ReduxValueWort.reduceIbuBoil} ibuHopStand={ReduxValueWort.reduceIbuHopsStand}/>
      :
      <span></span>
        }
      </Grid>
    </React.Fragment>
  );
};

export default CalculatorIBU;
