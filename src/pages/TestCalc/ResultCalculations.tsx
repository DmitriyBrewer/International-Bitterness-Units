import React from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import HOP from "../../store/reducer/hopPharamSlice";
import { AppDispatch, AppState, RootState } from "../../store/store";
//redux
//MUI
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import PharamInput from "./PharamInput";
//MUI

const ResultCalculations = () => {
  //Redux
  const dispatch: AppDispatch = useDispatch();
  const Hop = useSelector((state: AppState) => state.hop);
  //Redux

  //accordion
  const [expanded, setExpanded] = React.useState < string | false > (false);
  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };
  //accordion
  //{ibuValue?ibuValue:'✍️'}

  const calcIbu =
    Hop.hopBoil.reduce((prev: any, curr: any) => prev + curr.ibu, 0) +
    Hop.hopStand.reduce((prev: any, curr: any) => prev + curr.ibu, 0);

  const caclHopBoil = Hop.hopBoil.reduce(
    (prev: any, curr: any) => prev + curr.ibu,
    0
  );

  const caclHopStand = Hop.hopStand.reduce(
    (prev: any, curr: any) => prev + curr.ibu,
    0
  );

  return (
    <React.Fragment>
      {/* <div>{calcIbu}</div>
            <div>{caclHopBoil}</div>
            <div>{caclHopStand}</div> */}
      <Grid item>
        <Paper elevation={3}>
          <Accordion
            //  disabled={!ReduxValueWort.checkAllError? true : false}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                sx={{ fontWeight: "bold", letterSpacing: 2 }}
                color="secondary"
              >
                Общее IBU : {"✍️...Ввод"}
              </Typography>
            </AccordionSummary>
            <Stack
              // spacing={2}
              direction="row"
              sx={{
                display: "flex",
                flexWrap: "inherit",
                justifyContent: "space-between",
                margin: "10px"
              }}
            >
              <Typography variant="h5" component="h2">
                Подробные параметы горечи
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
              }}
            >
              <PharamInput
                value={calcIbu}
                name="hopstand"
                onChange={() => {}}
              />
              <PharamInput
                value={caclHopBoil}
                name="hopstand"
                onChange={() => {}}
              />
            </Stack>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
              }}
            >
              <PharamInput
                value={caclHopStand}
                name="hopstand"
                onChange={() => {}}
              />
            </Stack>
          </Accordion>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

export default ResultCalculations;
