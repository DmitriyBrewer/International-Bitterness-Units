import React from 'react'
import HopSetting from "./HopSetting";
import {DeleteButton} from "./DeleteButton";
//MUI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
//MUI

interface IProps {
    childrenText:any
    H1: string
    stack1:any
    stack2:any
    stack3?:any
    deleteHop?:any
    amountP?:string | undefined
    handleChange?:(event:any)=>void
    menu?:boolean
    slider?: boolean
    disable?:boolean
}


const AccordionComponent: React.FC<IProps> = ({childrenText, H1,menu,slider, stack1, stack2, deleteHop,amountP,handleChange,stack3,disable}) => {

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
  const [amount, setAmount] = React.useState({ AMOUNT: "4000" });

  const amountHandlerSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount({ ...amount, AMOUNT: event.target.value });
  };
  //setting

    return (
    <React.Fragment>
      <Grid item>
        <Paper elevation={3}>
          <Accordion
          disabled={disable || false}
            expanded={expanded === "panel1"}
            onChange={handleChangeAccordion("panel1")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {childrenText}
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
              {H1}
              </Typography>
              <Stack direction="row">
                {!menu?
                <React.Fragment>
                <HopSetting
                  value={amount?.AMOUNT}
                  onChange={amountHandlerSlider}
                />
                <DeleteButton onClick={deleteHop} />
                </React.Fragment>
                :<React.Fragment></React.Fragment>
            }
                
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
                {stack1}
            </Stack>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
              }}
            >
                {stack2}
            </Stack>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
              }}
            >
            {stack3}
            </Stack>
            {!slider?
            <Slider
                color="secondary"
                sx={{ width: "90%" }}
                min={0.1}
                max={Number(amount?.AMOUNT)}
                value={Number(amountP)}
                onChange={handleChange}
                name="amount"
              />
              :
              <React.Fragment></React.Fragment>
            }
            </Accordion>
            </Paper>
            </Grid>
            </React.Fragment>
    )
}

export default AccordionComponent