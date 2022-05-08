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

const CalculatorIBU: React.FC = () => {

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
      <ResultTextField 
      // ibuValue={ReduxValueWort.reduceIBU} 
      // ibuBoil={ReduxValueWort.reduceIbuBoil} 
      // ibuHopStand={ReduxValueWort.reduceIbuHopsStand}
      />
      </Grid>
    </React.Fragment>
  );
};

export default CalculatorIBU;
