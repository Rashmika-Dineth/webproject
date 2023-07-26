import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useState, useContext} from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import Modal from "react-bootstrap/Modal";
import AuthContext from "../components/Authentication/AuthContext";
import {useNavigate} from "react-router-dom";

function Login() {
  const {setAuthResult} = useContext<any>(AuthContext);
  const [show, setShow] = useState<boolean>();
  const [description, setDescription] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  const OnSubmitLogin = () => {
    console.log("Submit login");
    //console.log("Result", authResult);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userName = userCredential?.user?.displayName;
        setAuthResult({
          loading: false,
          user: userCredential.user,
        });
        setShow(true);
        setModalTitle(`Welcome ${userName}`);
        setDescription("You are now logged in");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        setShow(true);
        setModalTitle("Error");
        setDescription(` ${error.message}`);
        //console.log(error);
      })
      .finally(() => {
        setEmail("");
        setPassword("");
      });
  };
  return (
    <div className="d-flex align-items-center justify-content-center">
      {/*/////////////////////////////////// FORM ///////////////////////////////////////////////////////////*/}
      <Form>
        <br />
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            value={email}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter Your Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            disabled={email.length <= 0}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Button variant="primary" onClick={() => OnSubmitLogin()}>
          Submit
        </Button>
        <br />
        <br />
        Login or <a href="/signup"> Signup </a> as a new user
      </Form>
      {/*/////////////////////////////////// MODAL ///////////////////////////////////////////////////////////*/}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShow(false);
              navigate("/home");
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;
