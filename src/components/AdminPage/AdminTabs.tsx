import {useContext} from "react";
import {AdminContext} from "./AdminContext";
import AddModules from "./AddModules";
import UserPage from "./UserPage";
import AddModuleData from "./AddModuleData";
import Modules from "./Modules";

function AdminTabs() {
  const {title} = useContext<any>(AdminContext);
  return (
    <div className="d-flex align-content-start flex-wrap">
      {title === "Add Module" && <AddModules />}
      {title === "User Page" && <UserPage />}
      {title === "Add Module Data" && <AddModuleData />}
      {title === "Modules" && <Modules />}
    </div>
  );
}

export default AdminTabs;
