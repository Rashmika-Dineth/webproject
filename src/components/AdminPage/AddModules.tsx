import * as React from "react";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../Services/Firebase";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";
import {useContext, useState} from "react";
import {AdminContext} from "./AdminContext";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://dbms-unit10.web.app/">
        Rashmika
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AddModules() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgTitle, setMsgTitle] = useState("");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [order, setOrder] = useState(0);
  const {setTitle} = useContext<any>(AdminContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("id") && data.get("title") && data.get("code")) {
      AddModuleDatabase(data);
    } else {
      setMsgTitle("FAIL !");
      setMsg("Please fill the cumpulsary data !");
      setOpen(true);
    }
  };

  const AddModuleDatabase = async (data: FormData) => {
    try {
      await addDoc(collection(db, "modules"), {
        id: data.get("id"),
        order: order,
        title: data.get("title"),
        unit: data.get("unit"),
        level: data.get("level"),
        description: data.get("description"),
        batch: data.get("batch"),
      }).then(() => {
        setMsgTitle("SUCCESS !");
        setMsg("Module Added Successfully !");
        setOpen(true);
      });
    } catch (e) {
      setMsgTitle("ERROR !");
      setMsg("Error trying to add the module. Please try again !");
    } finally {
      setTimeout(() => {
        setTitle("Modules");
      }, 1500);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <DashboardCustomizeIcon sx={{fontSize: 40}}>
            <LockOutlinedIcon />
          </DashboardCustomizeIcon>
          <Typography component="h1" variant="h5">
            ADD MODULES
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={4}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  name="id"
                  autoFocus
                  value={order}
                  onChange={(e) => setOrder(parseInt(e.target.value))}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="code"
                  label="CODE"
                  name="code"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="unit"
                  label="UNIT"
                  name="unit"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="MODULE NAME"
                  name="title"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="level"
                  label="LEVEL"
                  name="level"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={7}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="description"
                  label="DESCRIPTION"
                  name="description"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="batch"
                  label="BATCH CODE"
                  name="batch"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}></Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt: 3, mb: 2}}
            >
              ADD MODULE
            </Button>
          </Box>
        </Box>
        <Copyright sx={{mt: 8, mb: 4}} />
      </Container>
      {/* //////////////////////////////// MESSAGE BOX //////////////////////////// */}
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{msgTitle}</DialogTitle>
          <DialogContent>
            <DialogContentText>{msg}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
