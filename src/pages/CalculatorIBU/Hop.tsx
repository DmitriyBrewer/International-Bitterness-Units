import * as React from "react";
//component
import HopSetting from "./HopSetting";
import DeleteButton from "./DeleteButton";
//component
//MUI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import ReportIcon from '@mui/icons-material/Report';
//MUI


interface IHop {
  id:any
}

export interface ISlider {
  AMOUNT: string;
}

export const Hop: React.FC<IHop> = ({id
}) => {
  //accordion
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };
  //accordion
  const [amount,setAmount] = React.useState<ISlider>({AMOUNT: '5000'})

  const amountHandlerSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount({ ...amount, AMOUNT: event.target.value });
  };

  //redux value
  return (
    <Grid item>
      <Paper elevation={3}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Хмель на варку IBU: </Typography>
          {/* {!ReduxValueHop.checkBoilError?<ReportIcon style={{marginLeft:'5px'}} color='error'/>:<span></span>} */}
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
              Параметры хмеля
            </Typography>
            <Stack direction="row">
              <HopSetting value={amount?.AMOUNT}
              onChange={amountHandlerSlider}/>
              <DeleteButton onClick={()=>{
                console.log('delete');
              }} />
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
            <TextField
              sx={{ margin: "10px" }}
              id="outlined-basic"
              label="Наименование хмеля"
              variant="outlined"
              size="small"
              // value={ReduxValueHop.name}
              // onClick={selectHopId}
              // onFocus={selectHopId} 
              // onChange={nameHandler}
              // onMouseDown={selectHopId}
              type="string"
            />
            <TextField
              sx={{ margin: "10px" }}
              id="outlined-basic"
              label="Альфа кислота"
              variant="outlined"
              size="small"
              // value={ReduxValueHop.alpha}
              // onClick={selectHopId}
              // onFocus={selectHopId} 
              // onChange={alphaHandler}
              // onBlur={alphaBlurValidation}
              // onMouseUp={selectHopId}
              // onMouseDown={selectHopId}
              type="number"
              // error={ReduxValueHop.alphaValidation===undefined?false:!ReduxValueHop.alphaValidation}
              // helperText={
              //   ReduxValueHop.alphaValidation===undefined?
              //   "Введите от 0.1 до ∞"
              //   :
              //   !ReduxValueHop.alphaValidation? 
              //   "❌ от 0.1 до ∞" :"✅ Верное значение" 
              // }
              required={true}
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
            <TextField
              sx={{ margin: "10px" }}
              id="outlined-basic"
              label="Кол-во, г"
              variant="outlined"
              size="small"
              // value={ReduxValueHop.amount}
              // onClick={selectHopId}
              // onChange={amountHandler}
              // onBlur={amountBlurValidation}
              // onMouseDown={selectHopId}
              // //
              // onFocus={selectHopId} 
              // //
              // type="number"
              // error={ReduxValueHop.amountValidation===undefined?false:!ReduxValueHop.amountValidation}
              // helperText={
              //   ReduxValueHop.amountValidation===undefined?
              //   "Введите от 0 до ∞"
              //   :
              //   !ReduxValueHop.amountValidation? 
              //   "❌ от 0 до ∞" :"✅ Верное значение" 
              // }
              // InputLabelProps={{
              //   shrink: ReduxValueHop.amount ? true : false
              // }}
              required={true}
            />
            <TextField
              sx={{ margin: "10px" }}
              id="outlined-basic"
              label="Время внесения,м"
              variant="outlined"
              size="small"
              // value={ReduxValueHop.time}
              // onClick={selectHopId}
              // onChange={timeHandler}
              // onBlur={timeBlurValidation}
              // // onMouseUp={selectHopId}
              // onMouseDown={selectHopId}
              // type="number"
              // disabled={!boilValidation}
              // error={ReduxValueHop.timeValidation===undefined?false:!ReduxValueHop.timeValidation}
              // helperText={
              //   ReduxValueHop.timeValidation===undefined?
              //   "⚠️  от 0 до Время кипячения"
              //   :
              //   !ReduxValueHop.timeValidation? 
              //   "❌ от 0 до Время кипячения" :"✅ Верное значение" 
              // }
              required={true}
            />
            <Slider color="secondary" sx={{ width: "90%" }} 
            // valueLabelDisplay="auto"
            min={0.1}
            max={Number(amount?.AMOUNT)}
            // value={ReduxValueHop.amount}
            onChange={(event: any) => {
             
            }}
            />
          </Stack>
        </Accordion>
      </Paper>
    </Grid>
  );
};

export default Hop;