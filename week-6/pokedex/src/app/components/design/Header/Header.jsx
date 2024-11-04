import "./Header.css";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import PropTypes from "prop-types";
import { FiUser } from "react-icons/fi";
import Button from "@design/Button/Button";

const Header = ({ user, onLogout }) => {
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
            <li className="nav__item">
              <NavLink to="/posts">Posts</NavLink>
            </li>
            <li className="nav__item nav__item--user">
              {user ? (
                <p className="user">
                  <FiUser />
                  {user.email}
                  <Button onClick={onLogout}>Logout</Button>
                </p>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  onLogout: PropTypes.func,
};

export default Header;
