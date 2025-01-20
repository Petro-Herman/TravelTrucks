import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <header className={css.header}>
      <img src={logo} alt="logo" className={css.logo} />
      <nav className={css.navigation}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
