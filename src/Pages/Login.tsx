import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useState} from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br />
        <br />
        Login or <a href="/signup"> Signup </a> as a new user
      </Form>
    </div>
  );
}

export default Login;
