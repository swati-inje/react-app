import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file

function Home() {
  const navigate = useNavigate(); // Hook to get the navigate function

  // Function to handle navigation and pass state
  const handleSignIn = () => {
    navigate('/landingpage', { state: { showModal: true } });
  };
  const simplenav = () => {
    navigate('/landingpage');
  };

  return (
    <div>
      <div className="outerDiv">
        <div>
          <h2>Get Started Now</h2>
          <h6>Enter your credentials to access your account</h6>
          <div className="sideBySide">
            <button className="topButton">Login with Google</button>
            <button className="topButton">Login with Apple</button>
          </div>
          <div className="lineFlex">
            <div className="line"></div>
            <span>or</span>
            <div className="line"></div>
          </div>
          <form>
            <label>Name</label><br/>
            <input type="text" className="homeInput" id="name" placeholder="Enter your name"/><br/><br/>
            <label>Email address</label><br/>
            <input type="email" className="homeInput" id="email" placeholder="Enter your email address"/><br/><br/>
            <label>Password</label><span className="forgotPassword">Forgot Password?</span><br/>
            <input type="password" className="homeInput" id="password" placeholder="Enter your password"/><br/><br/>
            <input type="checkbox" id="agree" /><label htmlFor="agree"> I agree to the Terms and Policy</label><br/><br/>
            <button className="loginBtn" onClick={simplenav}><h2>Login</h2></button> <br/><br/>
            <label>Have an account? <span className="signIn" onClick={handleSignIn}>Sign in</span></label>
          </form>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/3309884/pexels-photo-3309884.jpeg?auto=compress&cs=tinysrgb&w=600" className="imageTag" alt="puppy-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
