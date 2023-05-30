import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <h1 className={css.header__title}>Welcome on films finder</h1>
      <nav className={css.header__nav}>
        <NavLink className={css.header__link} to="/">
          Home
        </NavLink>
        <NavLink className={css.header__link} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
