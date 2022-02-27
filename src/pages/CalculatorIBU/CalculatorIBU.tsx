import * as React from "react";
import { useEffect } from "react";
//Components
import Wort from "./Wort";
import HopList from "./HopList";
import HopStandList from "./HopStandList";
import HopsButton from "../../components/UI/button/HopsButton";
import SplitButton from "../../components/UI/button/SelectButton";
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
    reduceIBU: ""
  };
  Hops.forEach((element: any) => {
    ReduxValueWort = {
      volume: element.volume,
      destiny: element.destiny,
      boil: element.boil,
      concatIBU: element.concatIBU,
      reduceIBU: element.reduceIBU
    };
  });
  //wort redux
  const ibuAddHopAndValidation = (event:any) => {
    //addHop
    event.preventDefault()
    dispatch(HOPS.actions.addHop());
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
          <Alert variant="filled" severity="info" style={{ marginTop: "20px" }}>
            Для наглядной работы калькулятора, поля были заблаговременно
            заполнены, нажмите добавить хмель
          </Alert>
        </Container>
        <Typography variant="h4" component="h1">
        Калькулятор IBU
      </Typography>
        <Wort />
        <HopList />
      </Grid>
      {/* <div style={{ textAlign: "center" }}>
        <Container maxWidth="sm">
          <Alert variant="filled" severity="info" style={{ marginTop: "20px" }}>
            Для наглядной работы калькулятора, поля были заблаговременно
            заполнены, нажмите добавить хмель
          </Alert>
          <Wort />
          <div
            style={{
              margin: "10px",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap"
            }}
          >
            <HopsButton
              onClick={ibuAddHopAndValidation}
            >
              Добавить хмель
            </HopsButton>
            <HopsButton
              onClick={()=>{
                dispatch(HOPS.actions.volumeValidation());
                dispatch(HOPS.actions.destinyValidation());
                dispatch(HOPS.actions.boilValidation());
                dispatch(HOPSSTAND.actions.addHop())
              }}
            >
              Добавить hopstand
            </HopsButton>
            <SplitButton/>
              
             
          </div>
          <HopList />
          <HopStandList />
          <h1 style={{
            fontSize: "20px",
            color: "purple",
            margin: "10px",
            fontFamily: "roboto"
          }}>Общее IBU: {ReduxValueWort.reduceIBU}</h1>
        </Container>
      </div> */}
    </React.Fragment>
  );
};

export default CalculatorIBU;
