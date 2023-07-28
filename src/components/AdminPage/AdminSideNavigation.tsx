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
import {AdminContext} from "./AdminContext";

function SideNavigation() {
  const {setTitle} = useContext<any>(AdminContext);

  const [pages, setPages] = useState<any[] | undefined>();
  const adminCollectionRef = collection(db, "admin");
  const q = query(adminCollectionRef, orderBy("id"));

  useEffect(() => {
    const GetAdminPages = async () => {
      const data = await getDocs(q);
      setPages(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    GetAdminPages();
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
