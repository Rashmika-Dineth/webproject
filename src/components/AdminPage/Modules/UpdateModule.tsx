import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {useContext, useEffect, useState} from "react";
import {ModuleContext} from "./ModuleContext";
import Link from "@mui/material/Link";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "../../Services/Firebase";

function UpdateModule() {
  const defaultTheme = createTheme();
  const {update, setTitle} = useContext<any>(ModuleContext);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgTitle, setMsgTitle] = useState("");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [batch, setBatch] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [level, setLevel] = useState("");
  const [modulecode, setModulecode] = useState("");
  const [order, setOrder] = useState(0);
  const [moduleTitle, setModuleTitle] = useState("");
  const [unit, setUnit] = useState("");

  useEffect(() => {
    const getModules = async () => {
      const docRef = doc(db, "modules", update);
      const docSnap = await getDoc(docRef);

      if (docSnap.data() !== undefined) {
        setBatch(docSnap.data()?.batch);
        setDescription(docSnap.data()?.description);
        setId(docSnap.data()?.id);
        setLevel(docSnap.data()?.level);
        setModulecode(docSnap.data()?.modulecode);
        setOrder(docSnap.data()?.order);
        setModuleTitle(docSnap.data()?.title);
        setUnit(docSnap.data()?.unit);
      }
    };

    getModules();

    // eslint-disable-next-line
  }, [update]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("id") && data.get("title") && data.get("code")) {
      UpdateModuleDatabase();
    } else {
      setMsgTitle("FAIL !");
      setMsg("Please fill the cumpulsary data !");
      setOpen(true);
    }
  };

  const UpdateModuleDatabase = async () => {
    const docRef = doc(db, "modules", update);

    try {
      await setDoc(docRef, {
        id: id,
        order: order,
        title: moduleTitle,
        unit: unit,
        level: level,
        description: description,
        batch: batch,
        modulecode: modulecode,
      }).then(() => {
        setMsgTitle("SUCCESS !");
        setMsg("Module Updated Successfully !");
        setOpen(true);
      });
    } catch (e) {
      setMsgTitle("ERROR !");
      setMsg("Error trying to update the module. Please try again !");
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
            UPDATE MODULE
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={4}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="id"
                  label="Order"
                  name="id"
                  autoFocus
                  type="number"
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
                  value={modulecode}
                  onChange={(e) => setModulecode(e.target.value)}
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
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
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
                  value={moduleTitle}
                  onChange={(e) => setModuleTitle(e.target.value)}
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
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}></Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{mt: 3, mb: 2}}
            >
              UPDATE MODULE
            </Button>
            <Button
              onClick={() => setTitle("Modules")}
              fullWidth
              variant="contained"
              color="primary"
              sx={{mt: 3, mb: 2}}
            >
              GO TO MODULES
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

export default UpdateModule;
