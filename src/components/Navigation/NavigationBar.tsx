import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {useContext} from "react";
import AuthContext from "../Authentication/AuthContext";
import Button from "react-bootstrap/Button";
import {FaUserCircle, FaHome, FaAdn, FaUserLock} from "react-icons/fa";
import {getAuth, signOut} from "firebase/auth";

function NavigationBar() {
  const {authResult, setAuthResult} = useContext<any>(AuthContext);
  const auth = getAuth();

  const Logout = () => {
    signOut(auth)
      .then(() => {
        setAuthResult({
          loading: false,
          user: null,
        });
        localStorage.setItem("logggedStatus", "0");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"> Welcome</Navbar.Brand>
          <Nav>
            <Nav.Link href="/home">
              {" "}
              <FaHome color="white" size={25} /> Home
            </Nav.Link>
            <Nav.Link href="/about">
              {" "}
              <FaAdn color="white" size={25} /> About
            </Nav.Link>
            <Nav.Link href="/admin">
              {" "}
              <FaUserLock color="white" size={25} /> Admin
            </Nav.Link>
          </Nav>

          <Navbar.Collapse className="justify-content-end">
            {authResult?.user ? (
              <>
                <Navbar.Text color="white">
                  Logged in as: {authResult?.user?.displayName}
                </Navbar.Text>
                <Button
                  onClick={() => {
                    Logout();
                  }}
                  style={{marginLeft: 20}}
                  variant="dark"
                >
                  Log out
                </Button>
              </>
            ) : (
              <Button style={{marginLeft: 20}} variant="dark">
                <a href="/login"> Log in </a>
              </Button>
            )}
            <FaUserCircle color="white" size={25} />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navigation />
    </div>
  );
}

export default NavigationBar;
