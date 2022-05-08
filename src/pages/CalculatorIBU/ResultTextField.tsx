import * as React from 'react';
//MUI
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
//MUI

interface IPropsIBU {
    ibuValue?:any;
    ibuBoil?:any;
    ibuHopStand?:any;
}

const ResultTextField:React.FC<IPropsIBU> = ({ibuValue, ibuBoil, ibuHopStand}) => {

  //accordion
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };
  //accordion
  //{ibuValue?ibuValue:'✍️'}

  return (
    <Grid item >
      <Paper elevation={3}>
      <Accordion
      //  disabled={!ReduxValueWort.checkAllError? true : false}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 'bold', letterSpacing: 2  }} 
            color='secondary'>Общее IBU : {'✍️...Ввод'}
            </Typography>
            {/* <HelpCenterIcon style={{marginLeft:'240px'}} onClick={()=>{setExpanded("panel1")}}/> */}
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
            <Typography variant="h5" component="h2"  >
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
      <TextField
        sx={{ margin: "10px" }}
          id="outlined-read-only-input"
          label="Общее IBU"
          defaultValue="0"
          InputProps={{
            readOnly: true,
          }}
          // value={ReduxValueWort.reduceIBU? ReduxValueWort.reduceIBU:'' }
          color='secondary'
          size='small'
        />
        <TextField
        sx={{ margin: "10px" }}
          id="outlined-read-only-input"
          label="Boil IBU"
          value={ibuBoil}
          color='secondary'
          size='small'
        //   helperText="Boil IBU"
          InputLabelProps={{
            shrink:  true 
          }}
          InputProps={{
            readOnly: true,
          }}
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
          id="outlined-read-only-input"
          label="HopStand IBU"

          InputProps={{
            readOnly: true,
          }}
          value={ibuHopStand}
          color='secondary'
          size='small'
        //   helperText="HopStand IBU"
          InputLabelProps={{
            shrink: true 
          }}
        />
        </Stack>
        </Accordion>
        </Paper>
        </Grid>
  );
}

export default ResultTextField;