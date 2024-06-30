// import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function App() {
  return (
    // <div >
    //  <div className="outerDiv">
    //   <div>
    //   <h2>Get Started Now</h2>
    //   <h6>Enter your credentials to access your account</h6>

    //   <div className="sideBySide">
    //   <button className="topButton">Login with Google</button>
    //   <button className="topButton">Login with Apple</button>
    //   </div>
    //   {/* Line */}
    //   <div className="lineFlex">
    //     <div className="line">
    //     </div>
    //     <span>or</span>
    //     <div className="line">
    //     </div>
    //   </div>

    //   <form>
    //     <label>Name</label><br/>
    //     <input type="text" id="name" placeholder="Enter your name"/><br/><br/>
    //     <label>Email address</label><br/>
    //     <input type="email" id="email" placeholder="Enter your email address"/><br/><br/>
    //     <label>Password</label><span className="forgotPassword">Forgot Password?</span><br/>
    //     <input type="password" id="password" placeholder="Enter your password"/><br/><br/>
    //     <input type="checkbox" id="agree" /><label for="agree"> I agree to the Terms and Policy</label><br/><br/>
    //     <button className="loginBtn"><h2>Login</h2></button> <br/><br/>
    //     <label>Have an account? <span className="signIn">Sign in</span></label>
    //   </form>
    //   </div>
    //   <div>
    //     <img src="https://images.pexels.com/photos/3309884/pexels-photo-3309884.jpeg?auto=compress&cs=tinysrgb&w=600" className="imageTag" alt="puppy-image" />
    //   </div>
    //  </div>
    // </div>
    <Container>
      <Row className="justify-content-center mt-5 ">
        <Col md={6}>
          <h2 className="text-center mb-4">Login</h2>
          <Form >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );

}

export default App;
