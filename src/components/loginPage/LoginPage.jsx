import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.png'; 

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Yana' && password === 'Yana123') {
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <img src={logo} alt="YANA Logo" className="w-40 mb-6" />
      <form onSubmit={handleLogin} className="flex flex-col items-center w-full max-w-md px-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 p-2 border border-red-600 rounded-md w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 border border-red-600 rounded-md w-full"
        />
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <button
          type="submit"
          className="bg-red-600 text-white py-2 rounded-md w-full hover:bg-red-500 transition-colors"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
