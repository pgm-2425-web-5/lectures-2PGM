import "./Header.css";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <nav className="header__nav">
          <ul className="nav">
            <li className="nav__item">
              <Link to="/">Pokemon</Link>
            </li>
            <li className="nav__item">
              <Link to="/games">Games</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
