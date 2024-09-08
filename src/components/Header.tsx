import React from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  toggleTheme: () => void;

}
const Header: React.FC<HeaderProps> = ({toggleTheme}) => {
  return (
    <header className="header">
      <h1 className='header__title'>Trivia Game</h1>
      <nav>
        <NavLink to="/"  className="navLink">Home</NavLink>
        <NavLink to="/quiz" className="navLink">Quiz</NavLink>
        <button onClick={toggleTheme}>Theme</button>
      </nav>
    </header>
  );
};

export default Header;
