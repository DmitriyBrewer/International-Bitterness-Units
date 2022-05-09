import React, { useState } from "react";
import PharamInput from "./PharamInput";
import HopSetting from "./HopSetting";
import {DeleteButton} from "./DeleteButton";

//MUI
import Slider from "@mui/material/Slider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import ReportIcon from "@mui/icons-material/Report";
//MUI

//redux
import { useSelector, useDispatch } from "react-redux";
import HOP from "../../store/reducer/hopPharamSlice";
import { AppDispatch, AppState, RootState } from "../../store/store";
//redux

import { Calc } from "../CalculatorIBU/CalcFunc";

import {
  alphaValidations,
  amountValidations,
  timeValidations,
  timeHopValidations,
  temperatureValidations,
  ibuValidations
} from "./ValidationPharam";

interface IHop {
  hopElement: {
    id: string,
    nameHop: string | undefined,
    alpha: string | undefined,
    amount: string | undefined,
    time: string | undefined,
    hopStand: string | undefined,
    alphaValidation: boolean | undefined,
    amountValidation: boolean | undefined,
    timeValidation: boolean | undefined,
    hopStandValidation: boolean | undefined,
    ibu: undefined | number | string
  };
}

const Hop: React.FC<IHop> = ({ hopElement }) => {
  //Redux
  const dispatch: AppDispatch = useDispatch();
  const Hop = useSelector((state: AppState) => state.hop);
  //Redux

  const [pharam, setPharam] = React.useState(hopElement);

  const hopIBU = Calc(
    pharam.nameHop,
    pharam.alpha,
    pharam.amount,
    pharam.time,
    Hop.wort.volume,
    Hop.wort.destiny,
    Hop.wort.boil
  );

  const allValidation =
    pharam.alphaValidation &&
    pharam.amountValidation &&
    pharam.timeValidation &&
    Hop.wort.volumeValidation &&
    Hop.wort.destinyValidation &&
    Hop.wort.boilValidation;

  const ibuValidation = ibuValidations(allValidation, hopIBU);

  React.useEffect(() => {
    ibuCalc();
  }, [ibuValidation]);

  React.useMemo(() => {
    setTimeout(() => {
      dispatch(HOP.actions.getPharamHopBoil(pharam));
    }, 0);
  }, [pharam]);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setPharam((prevState: any) => {
      return { ...prevState, [name]: value };
    });
  }

  const deleteHopBoil = () => {
    dispatch(HOP.actions.deleteHopBoil(pharam.id));
  };

  const ValidationAlpha = () => {
    setPharam({ ...pharam, alphaValidation: alphaValidations(pharam.alpha) });
  };

  const ValidationAmount = () => {
    setPharam({
      ...pharam,
      amountValidation: amountValidations(pharam.amount)
    });
  };

  const ValidationTime = () => {
    setPharam({
      ...pharam,
      timeValidation: timeValidations(pharam.time, Hop.wort.boil)
    });
  };

  const ibuCalc = () => {
    setPharam({ ...pharam, ibu: ibuValidation });
  };
  console.log(Hop);

  //accordion
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChangeAccordion = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };
  //accordion

  //setting
  const [amount, setAmount] = React.useState({ AMOUNT: "5000" });

  const amountHandlerSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount({ ...amount, AMOUNT: event.target.value });
  };
  //setting

  return (
    <React.Fragment>
      <Grid item>
        <Paper elevation={3}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChangeAccordion("panel1")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                Хмель на варку {pharam.nameHop} IBU: {ibuValidation}{" "}
              </Typography>
            </AccordionSummary>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                flexWrap: "inherit",
                justifyContent: "space-between",
                margin: "10px"
              }}
            >
              <Typography variant="h5" component="h2">
                Параметры хмеля
              </Typography>
              <Stack direction="row">
                <HopSetting
                  value={amount?.AMOUNT}
                  onChange={amountHandlerSlider}
                />
                <DeleteButton onClick={deleteHopBoil} />
              </Stack>
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
                onChange={handleChange}
                value={pharam.nameHop}
                name="nameHop"
                types="text"
              />
              <PharamInput
                onChange={handleChange}
                value={pharam.alpha}
                name="alpha"
                onBlur={ValidationAlpha}
                validation={pharam.alphaValidation}
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
                onChange={handleChange}
                value={pharam.amount}
                name="amount"
                onBlur={ValidationAmount}
                validation={pharam.amountValidation}
              />
              <PharamInput
                onChange={handleChange}
                value={pharam.time}
                name="time"
                onBlur={ValidationTime}
                validation={pharam.timeValidation}
              />
              <Slider
                color="secondary"
                sx={{ width: "90%" }}
                min={0.1}
                max={Number(amount?.AMOUNT)}
                value={Number(pharam.amount)}
                onChange={handleChange}
                name="amount"
              />
            </Stack>
          </Accordion>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

const HopStand: React.FC<IHop> = ({ hopElement }) => {
  //Redux
  const dispatch: AppDispatch = useDispatch();
  const Hop = useSelector((state: AppState) => state.hop);
  //Redux

  const [pharam, setPharam] = React.useState(hopElement);

  const hopIBU = Calc(
    pharam.nameHop,
    pharam.alpha,
    pharam.amount,
    pharam.time,
    Hop.wort.volume,
    Hop.wort.destiny,
    Hop.wort.boil
  );

  const allValidation =
    pharam.alphaValidation &&
    pharam.amountValidation &&
    pharam.timeValidation &&
    Hop.wort.volumeValidation &&
    Hop.wort.destinyValidation &&
    Hop.wort.boilValidation;

  const ibuValidation = ibuValidations(allValidation, hopIBU);

  React.useEffect(() => {
    ibuCalc();
  }, [ibuValidation]);

  React.useMemo(() => {
    setTimeout(() => {
      dispatch(HOP.actions.getPharamHopStand(pharam));
    }, 0);
  }, [pharam]);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setPharam((prevState: any) => {
      return { ...prevState, [name]: value };
    });
  }

  const deleteHopStand = () => {
    console.log(Hop);
    dispatch(HOP.actions.deleteHopStand(pharam.id));
  };

  const ValidationAlpha = () => {
    setPharam({ ...pharam, alphaValidation: alphaValidations(pharam.alpha) });
  };

  const ValidationAmount = () => {
    setPharam({
      ...pharam,
      amountValidation: amountValidations(pharam.amount)
    });
  };

  const ValidationTime = () => {
    setPharam({ ...pharam, timeValidation: timeHopValidations(pharam.time) });
  };

  const ValidationHopStand = () => {
    setPharam({
      ...pharam,
      hopStandValidation: temperatureValidations(pharam.hopStand)
    });
  };

  const ibuCalc = () => {
    setPharam({ ...pharam, ibu: ibuValidation });
  };

  //accordion
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChangeAccordion = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };
  //accordion

  //setting
  const [amount, setAmount] = React.useState({ AMOUNT: "5000" });

  const amountHandlerSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount({ ...amount, AMOUNT: event.target.value });
  };
  //setting

  return (
    <React.Fragment>
      <Grid item>
        <Paper elevation={3}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChangeAccordion("panel1")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                Хмель на варку {pharam.nameHop} IBU: {ibuValidation}{" "}
              </Typography>
            </AccordionSummary>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                flexWrap: "inherit",
                justifyContent: "space-between",
                margin: "10px"
              }}
            >
              <Typography variant="h5" component="h2">
                Параметры хмеля
              </Typography>
              <Stack direction="row">
                <HopSetting
                  value={amount?.AMOUNT}
                  onChange={amountHandlerSlider}
                />
                <DeleteButton onClick={deleteHopStand} />
              </Stack>
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
                onChange={handleChange}
                value={pharam.nameHop}
                name="nameHop"
                types="text"
              />
              <PharamInput
                onChange={handleChange}
                value={pharam.alpha}
                name="alpha"
                onBlur={ValidationAlpha}
                validation={pharam.alphaValidation}
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
                onChange={handleChange}
                value={pharam.amount}
                name="amount"
                onBlur={ValidationAmount}
                validation={pharam.amountValidation}
              />
              <PharamInput
                onChange={handleChange}
                value={pharam.time}
                name="time"
                onBlur={ValidationTime}
                validation={pharam.timeValidation}
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
                onChange={handleChange}
                value={pharam.hopStand}
                name="hopStand"
                onBlur={ValidationHopStand}
                validation={pharam.hopStandValidation}
              />
            </Stack>
            <Slider
              color="secondary"
              sx={{ width: "90%" }}
              min={0.1}
              max={Number(amount?.AMOUNT)}
              value={Number(pharam.amount)}
              onChange={handleChange}
              name="amount"
            />
          </Accordion>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

const HopList: React.FC = () => {
  const Hops = useSelector((state: AppState) => state.hop);

  return (
    <React.Fragment>
      {Hops.hopBoil.map((element: any) => {
        return <Hop key={element.id} hopElement={element} />;
      })}

      {Hops.hopStand.map((element: any) => {
        return <HopStand key={element.id} hopElement={element} />;
      })}
    </React.Fragment>
  );
};

export default HopList;
