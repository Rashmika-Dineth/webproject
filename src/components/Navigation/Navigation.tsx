import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Welcome from "../../Pages/Welcome";
import Home from "../../Pages/Home";
import Signup from "../../Pages/Signup";
import Login from "../../Pages/Login";
import About from "../../Pages/About";
import PrivateRoutes from "./PrivateRoute";
import Admin from "../../Pages/Admin";

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}
