import "./Header.css";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <nav className="header__nav">
          <ul className="nav">
            <li className="nav__item">
              <NavLink to="/pokemon">Pokemon</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/games">Games</NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
