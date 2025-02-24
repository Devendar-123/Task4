import React, { useState, useEffect } from 'react';

const LocalStorageData = ()=> {
  // State for the form fields and user data
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [storedData, setStoredData] = useState({ username: '', email: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  // Handle form input changes for username and email
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Handle Sign Up form submission
  const handleSignUpSubmit = (event) => {
    event.preventDefault();

    // Save the form data to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);

    // Update state with the stored data for display
    setStoredData({ username, email });

    // Reset form fields
    setUsername('');
    setEmail('');
    setError(''); // Clear error messages
  };

  // Handle Login form submission
  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const savedUsername = localStorage.getItem('username');
    const savedEmail = localStorage.getItem('email');

    // Check if stored data matches entered data
    if (username === savedUsername && email === savedEmail) {
      setIsLoggedIn(true);
      setError(''); // Clear any previous error
    } else {
      setIsLoggedIn(false);
      setError('Invalid username or email');
    }
  };

  // Load stored data from localStorage on component mount
  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    const savedEmail = localStorage.getItem('email');

    if (savedUsername && savedEmail) {
      setStoredData({ username: savedUsername, email: savedEmail });
    }
  }, []);

  return (
    <div>
      <h2>{isLoggedIn ? 'Welcome Back' : 'Sign Up / Login'}</h2>

      {!isLoggedIn ? (
        <>
          {/* Sign Up Form */}
          <h3>Sign Up</h3>
          <form onSubmit={handleSignUpSubmit}>
            <div>
              <label>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} required/>
              </label>
            </div>
            
            <div>
              <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} required/>
              </label>
            </div>
            
            <button type="submit">Sign Up</button>
          </form>

          <h3>Login</h3>
          {/* Login Form */}
          <form onSubmit={handleLoginSubmit}>
            <div>
            <div>
              <label>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} required/>
              </label>
            </div>
            
            <div>
              <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} required/>
              </label>
            </div>
            </div>
            <button type="submit">Login</button>
          </form>

          {/* Error message if login fails */}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
      ) : (
        // If logged in, display stored data
        <div id='output'>
          <h3>Stored User Data:</h3>
          <p>Username: {storedData.username}</p>
          <p>Email: {storedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default LocalStorageData;