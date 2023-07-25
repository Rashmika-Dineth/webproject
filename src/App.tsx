import "./App.css";
import NavigationBar from "./components/NavigationBar";
import {useEffect} from "react";
import {getAuth} from "firebase/auth";
import {app} from "./components/Firebase";

export const auth = getAuth(app);

function App() {
  useEffect(() => {
    function handleResize() {}

    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="App" style={{maxWidth: window.innerWidth}}>
      <NavigationBar />
    </div>
  );
}

export default App;
