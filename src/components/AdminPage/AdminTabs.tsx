import {useContext} from "react";
import {AdminContext} from "./AdminContext";
import AddModules from "./AddModules";
import UserPage from "./UserPage";
import AddModuleData from "./AddModuleData";

function AdminTabs() {
  const {title} = useContext<any>(AdminContext);
  return (
    <div className="d-flex align-content-start flex-wrap">
      {title === "Add Modules" && <AddModules />}
      {title === "User Page" && <UserPage />}
      {title === "Add Module Data" && <AddModuleData />}
    </div>
  );
}

export default AdminTabs;
