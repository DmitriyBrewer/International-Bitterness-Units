import React from "react";
import Wort from "./Wort";
import Hop from "./Hop";
import ResultCalculations from "./ResultCalculations";

//MUI
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
//MUI

const CalcTestVersion = () => {
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
          <Alert
            variant="filled"
            severity="info"
            style={{ marginTop: "20px", justifyContent: "center" }}
          >
            Для начала работы введите параметры сусла, нажмите кнопку добавить
            хмель и выберите хмель
          </Alert>
        </Container>
        <Typography variant="h4" component="h1" sx={{ marginTop: "10px" }}>
          Калькулятор IBU
        </Typography>
        <Wort />
        <Hop />
        <ResultCalculations />
      </Grid>
    </React.Fragment>
  );
};

export default CalcTestVersion;
