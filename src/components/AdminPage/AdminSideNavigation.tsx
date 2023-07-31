import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import {useContext} from "react";
import Box from "@mui/material/Box";
import {AdminContext} from "./AdminContext";

function SideNavigation() {
  const {setTitle} = useContext<any>(AdminContext);

  const pages = [
    {id: 1, page: "Modules"},
    {id: 2, page: "Add Module"},
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,

        alignItems: "flex-end",
        alignContent: "flex-end",
        flexDirection: "row",
      }}
    >
      {pages?.map((page) => (
        <List key={page.id}>
          <ListItem key={page.id} disablePadding>
            <ListItemButton onClick={() => setTitle(page.page)}>
              <ListItemIcon>
                <AutoStoriesIcon />
              </ListItemIcon>

              <ListItemText primary={page.page} />
            </ListItemButton>
          </ListItem>
        </List>
      ))}
    </Box>
  );
}

export default SideNavigation;
