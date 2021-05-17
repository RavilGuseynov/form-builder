import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

  return (
    <nav>
      <div className="nav-wrapper blue darken-4">
        <Link to="/" className="brand-logo left">Builder</Link>
        <ul id="nav" className="right">
          <li><Link to="/upload">Upload new config</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/doc">Documentation</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;