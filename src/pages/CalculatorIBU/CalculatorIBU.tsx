import * as React from "react";
import { useEffect } from "react";
//Components
import Wort from "./Wort";
import HopList from "./HopList";
import HopStandList from "./HopStandList";
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
import HOPSSTAND from "../../store/reducer/hopStandSlice";
import { AppDispatch, AppState, RootState } from "../../store/store";
//redux

const CalculatorIBU: React.FC = () => {
  //Redux
  const dispatch: AppDispatch = useDispatch();
  const Hops = useSelector((state: AppState) => state.hops);
  const HopsStand = useSelector((state: AppState) => state.hopStand);
  console.log(Hops);
  console.log(HopsStand);
  //Redux
  //wort redux
  let ReduxValueWort = {
    volume: "",
    destiny: "",
    boil: "",
    concatIBU: "",
    reduceIBU: "",
    reduceIBUHopStand:""
  };
  Hops.forEach((element: any) => {
    ReduxValueWort = {
      volume: element.volume,
      destiny: element.destiny,
      boil: element.boil,
      concatIBU: element.concatIBU,
      reduceIBU: element.reduceIBU,
      reduceIBUHopStand:element.reduceIBUHopStand
    };
  });
  //wort redux
  console.log(ReduxValueWort.reduceIBUHopStand);
  console.log(ReduxValueWort.reduceIBU);

  
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
    <React.Fragment>
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
        {/* <Typography variant="h6" component="h1" sx={{ marginTop: "10px" }}>
        варка IBU: {ReduxValueWort.reduceIBU}
      </Typography>
      <Typography variant="h6" component="h1" sx={{ marginTop: "10px" }}>
        вирпул IBU: {ReduxValueWort.reduceIBUHopStand}
      </Typography>
      <Typography variant="h6" component="h1" sx={{ marginTop: "10px" }}>
        общий IBU: {Number(ReduxValueWort.reduceIBUHopStand)+Number(ReduxValueWort.reduceIBU)}
      </Typography> */}
        {/* <HopStandList /> */}
      </Grid>
    </React.Fragment>
  );
};

export default CalculatorIBU;
