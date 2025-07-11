import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/CandidateDashboard.css';

const CandidateNavbar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Schedule', path: '/HireSphere/src/pages/CandidateDashboard.jsx' },
    { label: 'Interviews', path: '/HireSphere/src/pages/CandidateInterview.jsx' },
    { label: 'Settings', path: '/HireSphere/src/pages/CandidateSettings.jsx' },
  ];


  return (
    <nav className="candidate-navbar">
      <div className="navbar-left">
        <h2 className="app-logo">Interview Scheduler</h2>
      </div>
      <div className="navbar-right">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`nav-link ${
              location.pathname === item.path ? 'active' : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
        <button className="logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default CandidateNavbar;
