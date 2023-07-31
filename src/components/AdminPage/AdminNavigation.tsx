import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import {useContext} from "react";
import Box from "@mui/material/Box";
import {ModuleContext} from "./Modules/ModuleContext";
import AddModules from "./Modules/AddModules";
import Modules from "./Modules/Modules";
import UpdateModule from "./Modules/UpdateModule";
import ViewModule from "./Modules/ViewModule";

function SideNavigation() {
  const {setTitle} = useContext<any>(ModuleContext);

  const pages = [
    {id: 1, page: "Modules"},
    {id: 2, page: "Users"},
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

export function AdminTabs() {
  const {title} = useContext<any>(ModuleContext);

  return (
    <div className="d-flex align-content-start flex-wrap">
      {title === "Add Module" && <AddModules />}
      {title === "Modules" && <Modules />}
      {title === "Update Module" && <UpdateModule />}
      {title === "View Module" && <ViewModule />}
    </div>
  );
}
