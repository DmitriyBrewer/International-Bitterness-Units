import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";

interface BulletedListProps {
    textContent?: string;
}

const BulletedList: React.FC<BulletedListProps> = ({textContent}) => {
return (
    <div>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon style={{ width: "10px" }} />
                </ListItemIcon>
                <ListItemText primary={textContent} />
              </ListItem>
    </div>
)
}

export default BulletedList