import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";

function Signup() {
  const [show, setShow] = useState<boolean>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordcnf, setPasswordcnf] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [description, setDescription] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const auth = getAuth();

  useEffect(() => {}, []);

  const AddUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {displayName: name}).then(() => {
          setModalTitle("Signup Success!");
          setDescription("You have successfully signed up");
        });
      })
      .catch((error) => {
        setDescription(error.message);
        setShow(true);
      })
      .finally(() => {
        ResetForm();
        setModalTitle("Signup Success!");
        setDescription("Please login to continue");
        setShow(true);
      });
  };

  const OnSubmit = () => {
    if (password !== passwordcnf) {
      setModalTitle("Signup Failed!");
      setDescription(
        "Password conformation does not match with your existing password"
      );
      setShow(true);
    } else if (password.length < 6) {
      setModalTitle("Signup Failed!");
      setDescription("Password must have atleast have 6 characters");
      setShow(true);
    } else {
      AddUser();
    }
  };

  const ResetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setPasswordcnf("");
    setCheckbox(false);
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      {/*/////////////////////////////////// FORM ///////////////////////////////////////////////////////////*/}
      <Form>
        <br />
        <br />
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="name"
            placeholder="Enter Your Name"
            value={name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            disabled={name.length <= 0}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
        <Form.Group className="mb-3" controlId="formBasicPasswordcnf">
          <Form.Label>Conform Your Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password conformation"
            disabled={email.length <= 0 && password.length <= 0}
            onChange={(e) => setPasswordcnf(e.target.value)}
            value={passwordcnf}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onChange={(e) => setCheckbox(e.target.checked)}
            type="checkbox"
            label="Agree to share login data and signup"
            checked={checkbox}
          />
        </Form.Group>
        <Stack
          direction="horizontal"
          gap={3}
          className="align-items-center justify-content-center"
        >
          <Button
            variant="primary"
            onClick={() => OnSubmit()}
            disabled={!checkbox}
          >
            Submit
          </Button>
          <Button variant="secondary" onClick={() => ResetForm()}>
            RESET
          </Button>
        </Stack>
        <br />
        <br />
        Signup or <a href="/login"> Login </a> for existing user
      </Form>
      {/*/////////////////////////////////// MODAL ///////////////////////////////////////////////////////////*/}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Signup;
