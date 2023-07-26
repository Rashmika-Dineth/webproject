import "./App.css";
import NavigationBar from "./components/Navigation/NavigationBar";
import {useEffect} from "react";
import {getAuth} from "firebase/auth";
import {app} from "./components/Services/Firebase";
import AuthProvider from "./components/Authentication/AuthProvider";

export const auth = getAuth(app);

function App() {
  useEffect(() => {
    function handleResize() {}

    window.addEventListener("resize", handleResize);
  });

  return (
    <AuthProvider>
      <div className="App" style={{maxWidth: window.innerWidth}}>
        <NavigationBar />
      </div>
    </AuthProvider>
  );
}

export default App;
