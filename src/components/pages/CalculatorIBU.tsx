import { useEffect } from "react";
//Components
import Wort from "../../components/Wort";
import HopList from "../../components/HopList";
import HopsButton from "../../components/UI/button/HopsButton";
//Components

//UI
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Alert from "@mui/material/Alert";
//UI

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
    <div>
      <CssBaseline />
      <div style={{ textAlign: "center" }}>
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
          </div>
          <HopList />
          <h1 style={{
            fontSize: "20px",
            color: "purple",
            margin: "10px",
            fontFamily: "roboto"
          }}>Общее IBU: {ReduxValueWort.reduceIBU}</h1>
        </Container>
      </div>
    </div>
  );
};

export default CalculatorIBU;
