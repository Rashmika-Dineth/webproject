import AuthContext from "../components/Authentication/AuthContext";
import {useContext} from "react";

function About() {
  const {authResult} = useContext<any>(AuthContext);
  console.log(authResult);
  return <div>Welcome {authResult?.user?.displayName}</div>;
}

export default About;
