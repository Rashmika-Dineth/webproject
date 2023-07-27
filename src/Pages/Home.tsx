import Grid from "@mui/material/Grid";
import {CardItems} from "../components/HomePage/CardItem";
import SideNavigation from "../components/HomePage/SideNavigation";

function Home() {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid item xs={10}>
          <CardItems title="Application Development" />
        </Grid>
        <Grid item xs={2}>
          <SideNavigation />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
