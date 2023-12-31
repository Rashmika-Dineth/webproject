import Grid from "@mui/material/Grid";
import {CardItems} from "../components/HomePage/CardItem";
import SideNavigation from "../components/HomePage/SideNavigation";
import {ModuleProvider} from "../components/HomePage/ModuleContext";

function Home() {
  return (
    <div>
      <ModuleProvider>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <CardItems />
          </Grid>
          {/* <Grid item xs={2}>
            <SideNavigation />
          </Grid> */}
        </Grid>
      </ModuleProvider>
    </div>
  );
}

export default Home;
