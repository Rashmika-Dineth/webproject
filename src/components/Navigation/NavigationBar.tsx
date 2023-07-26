import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {useContext} from "react";
import AuthContext from "../Authentication/AuthContext";
import Button from "react-bootstrap/Button";

import {getAuth, signOut} from "firebase/auth";

function NavigationBar() {
  const {authResult, setAuthResult} = useContext<any>(AuthContext);
  const auth = getAuth();

  const Logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    setAuthResult({
      loading: false,
      user: null,
    });
  };

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Welcome</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navigation />
    </div>
  );
}

export default NavigationBar;
