import "./App.css";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App" style={{maxWidth: window.innerWidth}}>
      <NavigationBar />
    </div>
  );
}

export default App;
