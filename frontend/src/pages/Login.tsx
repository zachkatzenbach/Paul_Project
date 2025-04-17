import { useState } from 'react';
import '../css/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const baseUrl =
    'https://paul-project-backend-b6b4cufec9hdepan.eastus-01.azurewebsites.net';

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(
      `${baseUrl}/login?useCookies=true&useSessionCookies=true`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      }
    );

    if (response.ok) {
      console.log('Login successful');
      setErrorMessage('');
      window.location.href = '/';
    } else {
      const errorText = await response.text();

      // Check for known error formats (optional - customize as needed)
      if (
        errorText.toLowerCase().includes('invalid') ||
        errorText.toLowerCase().includes('unauthorized')
      ) {
        setErrorMessage('Incorrect email or password.');
      } else {
        setErrorMessage(
          'An unexpected error occurred. Please try again later.'
        );
      }

      console.error('Login failed:', errorText);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="primary-btn">
            Log In
          </button>

          {/* Error Message Notification */}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
}

export default Login;
