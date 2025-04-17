import '../css/Header.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const baseUrl =
    'https://paul-project-backend-b6b4cufec9hdepan.eastus-01.azurewebsites.net';

  useEffect(() => {
    fetch(`${baseUrl}/pingauth`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => setAuthenticated(res.ok))
      .catch(() => setAuthenticated(false));
  }, []);

  const handleLogout = async () => {
    await fetch(`${baseUrl}/logout`, {
      method: 'POST',
      credentials: 'include',
    });
    setAuthenticated(false);
    navigate('/');
  };

  return (
    <header className="espn-header">
      <div className="header-left">
        <div
          className="logo-title"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          <img src="/Paul_Project.png" alt="Logo" className="logo" />
          <span className="project-title">Paul Project</span>
        </div>

        {/* 🔽 HOME button added here */}
        <button className="secondary-btn" onClick={() => navigate('/')}>
          Home
        </button>

        <nav className="nav-links">
          <div className="dropdown">
            <button className="dropbtn">Stages of Paul ▾</button>
            <div className="dropdown-content">
              <a href="/pre-conversion">1. Pre-Conversion</a>
              <a href="/first-mission">2. First Missionary Journey</a>
              <a href="/second-mission">3. Second Missionary Journey</a>
              <a href="/third-mission">4. Third Journey</a>
              <a href="/journey-to-rome">5. Journey to Rome</a>
            </div>
          </div>
        </nav>
      </div>

      <div className="header-right">
        {authenticated ? (
          <button className="primary-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="primary-btn" onClick={() => navigate('/login')}>
            Login
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
