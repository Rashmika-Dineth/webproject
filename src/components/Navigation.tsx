import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Welcome from "../Pages/Welcome";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
