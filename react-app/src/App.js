import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import the CSS file
import Home from './components/Home'; // Import the Home component
import LandingPage from './components/LandingPage'; // Import the LandingPage component

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Home component */}
        <Route path="/" element={<Home />} />
        {/* Route for LandingPage component */}
        <Route path="/landingpage" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
