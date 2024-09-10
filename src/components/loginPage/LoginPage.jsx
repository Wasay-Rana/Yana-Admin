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
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-white p-8 rounded-lg text-center w-full max-w-md">
        <img src={logo} alt="YANA Logo" className="w-72 mx-auto mb-4" />
        <form onSubmit={handleLogin} className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 p-2 border border-red-600 rounded w-3/4"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-2 border border-red-600 rounded w-3/4"
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button 
            type="submit" 
            className="bg-red-600 text-white py-2 rounded w-3/4 hover:bg-red-400"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
