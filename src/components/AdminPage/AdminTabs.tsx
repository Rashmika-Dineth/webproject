import {useContext} from "react";
import {AdminContext} from "./AdminContext";

function AdminTabs() {
  const {title} = useContext<any>(AdminContext);
  return <div>AdminTabs</div>;
}

export default AdminTabs;
