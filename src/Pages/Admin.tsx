import Grid from "@mui/material/Grid";
import AdminSideNavigation from "../components/AdminPage/AdminSideNavigation";
import {AdminProvider} from "../components/AdminPage/AdminContext";
import AdminTabs from "../components/AdminPage/AdminTabs";

function Admin() {
  return (
    <div>
      <AdminProvider>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item xs={10}>
            <AdminTabs />
          </Grid>
          <Grid item xs={2}>
            <AdminSideNavigation />
          </Grid>
        </Grid>
      </AdminProvider>
    </div>
  );
}

export default Admin;
