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
import {useContext, useEffect, useState} from "react";
import {ModuleContext} from "./ModuleContext";
import Link from "@mui/material/Link";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../Services/Firebase";

function ViewModule() {
  const defaultTheme = createTheme();
  const {update, setTitle} = useContext<any>(ModuleContext);

  const [batch, setBatch] = useState("");
  const [description, setDescription] = useState("");
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
            VIEW MODULE
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
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}></Grid>

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

export default ViewModule;
