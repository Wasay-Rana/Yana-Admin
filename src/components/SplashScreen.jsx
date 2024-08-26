import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/SplashScreen.css';

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <img src={logo} alt="YANA Logo" className="logo" />
      {/* <h1>YANA</h1>
      <p>You Are Never Alone</p> */}
    </div>
  );
}

export default SplashScreen;