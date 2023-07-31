import Grid from "@mui/material/Grid";
import AdminNavigation, {
  AdminTabs,
} from "../components/AdminPage/AdminNavigation";
import {AdminProvider} from "../components/AdminPage/Modules/ModuleContext";
import {UserProvider} from "../components/AdminPage/Users/UserContext";

function Admin() {
  return (
    <div>
      <AdminProvider>
        <UserProvider>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            <Grid item xs={10}>
              <AdminTabs />
            </Grid>
            <Grid item xs={2}>
              <AdminNavigation />
            </Grid>
          </Grid>
        </UserProvider>
      </AdminProvider>
    </div>
  );
}

export default Admin;
