import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import {useContext, useEffect, useState} from "react";
import {collection, query, orderBy, getDocs} from "firebase/firestore";
import Box from "@mui/material/Box";
import {db} from "../Services/Firebase";
import {ModuleContext} from "./ModuleContext";

function SideNavigation() {
  const {setTitle} = useContext<any>(ModuleContext);

  const [modules, setModules] = useState<any[] | undefined>();
  const usersCollectionRef = collection(db, "modules");
  const q = query(usersCollectionRef, orderBy("id"));

  useEffect(() => {
    const getModules = async () => {
      const data = await getDocs(q);
      setModules(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getModules();
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,

        alignItems: "flex-end",
        alignContent: "flex-end",
        flexDirection: "row",
      }}
    >
      {modules?.map((module) => (
        <List key={module.id}>
          <ListItem key={module.id} disablePadding>
            <ListItemButton onClick={() => setTitle(module.title)}>
              <ListItemIcon>
                <AutoStoriesIcon />
              </ListItemIcon>

              <ListItemText primary={module.title} />
            </ListItemButton>
          </ListItem>
        </List>
      ))}
    </Box>
  );
}

export default SideNavigation;
