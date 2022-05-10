import React from 'react'
import Stack from "@mui/material/Stack";

interface IStack {
    content:any;
    typeStack:any
}

export const StackAccordion: React.FC<IStack> = ({content, typeStack}) => {
    const selectStack = () => {
        if (typeStack==='secondary') {
            return (
                <Stack
                direction="row"
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}
                >
                  {content}  
                </Stack>
            )
        } else return (<React.Fragment></React.Fragment>)
    }



    return (
        <React.Fragment>
            {selectStack()}
        </React.Fragment>
    )
}