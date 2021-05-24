import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header: React.FC = () => {

  return (
    <nav>
      <div className="nav-wrapper blue darken-4">
        <Link to="/" className="brand-logo left left-margin">Конструктор форм</Link>
        <ul id="nav" className="right right-margin">
          <li><Link to="/upload">Обновить конфиг</Link></li>
          <li><Link to="/form">Форма</Link></li>
          <li><Link to="/doc">Документация</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;