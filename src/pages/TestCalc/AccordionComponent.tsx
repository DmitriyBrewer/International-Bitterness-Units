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

import {StackAccordion} from './StackAccordion'

interface IProps {
    title:any
    subtitle: string
    stackColumn1:any
    stackColumn2:any
    stackColumn3?:any
    deleteHop?:any
    sliderAmount?:string | undefined
    handleChange?:(event:any)=>void
    menuSetting?:boolean
    sliderVision?: boolean
    disable?:boolean
}

const AccordionComponent: React.FC<IProps> = ({title, subtitle, menuSetting, sliderVision, stackColumn1, stackColumn2, deleteHop, sliderAmount, handleChange, stackColumn3, disable}) => {

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
            disabled={disable }
            expanded={expanded === "panel1"}
            onChange={handleChangeAccordion("panel1")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {title}
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
                  {subtitle}
              </Typography>
              <Stack direction="row">
                  {!menuSetting?
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

            <StackAccordion content={stackColumn1} typeStack='secondary'/>
            <StackAccordion content={stackColumn2} typeStack='secondary'/>
            <StackAccordion content={stackColumn3} typeStack='secondary'/>
            
            {!sliderVision?
            <Slider
                color="secondary"
                sx={{ width: "90%" }}
                min={0.1}
                max={Number(amount?.AMOUNT)}
                value={Number(sliderAmount)}
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