import { Link } from 'react-router-dom';

import '../styles/layout/Header.scss';
import logo from '../images/wow-logo.png';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <h1 className="header__title">The final Owen Wilson 'wow' collection</h1>
    </header>
  );
};

export default Header;
