import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  orderBy,
} from "firebase/firestore";
import {db} from "../Services/Firebase";
import {Button} from "@mui/material";
import {useEffect, useState} from "react";

const drawerWidth = 240;

export default function HomeTabs() {
  const [modules, setModules] = useState<any[] | undefined>();
  const usersCollectionRef = collection(db, "modules");
  const q = query(usersCollectionRef, orderBy("id"));
  useEffect(() => {
    const getModules = async () => {
      const data = await getDocs(q);
      setModules(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getModules();
  }, []);

  const FirestoreAdd = async () => {
    try {
      const docRef = await addDoc(collection(db, "modules"), {
        id: 5,
        title: "Module 5",
        unit: "15",
        level: 4,
        description: "sample module 5",
        batch: "unknown",
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  {
    return (
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        {modules?.map((module) => (
          <List key={module.id}>
            <ListItem key={module.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AutoStoriesIcon />
                </ListItemIcon>
                <ListItemText primary={module.title} />
              </ListItemButton>
            </ListItem>
          </List>
        ))}
      </Drawer>
    );
  }
}
