import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {useContext} from "react";
import AuthContext from "../Authentication/AuthContext";
import Button from "react-bootstrap/Button";

function NavigationBar() {
  const {authResult} = useContext<any>(AuthContext);
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
          {authResult?.user?.token && (
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Logged in as: {authResult?.user?.displayName}
              </Navbar.Text>
              <Button style={{marginLeft: 20}} variant="dark">
                Log out
              </Button>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>

      <Navigation />
    </div>
  );
}

export default NavigationBar;
