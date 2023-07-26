import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {useContext} from "react";
import AuthContext from "../Authentication/AuthContext";
import Button from "react-bootstrap/Button";
import {FaUserCircle} from "react-icons/fa";
import {getAuth, signOut} from "firebase/auth";
import {useState} from "react";

function NavigationBar() {
  const {authResult, setAuthResult} = useContext<any>(AuthContext);
  const auth = getAuth();
  const [loginToggle, setLoginToggle] = useState(false);

  const Logout = () => {
    signOut(auth)
      .then(() => {
        setAuthResult({
          loading: false,
          user: null,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Welcome</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
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
                <a onClick={() => setLoginToggle(false)} href="/login">
                  {" "}
                  Log in{" "}
                </a>
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
