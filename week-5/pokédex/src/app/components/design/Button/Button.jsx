import PropTypes from "prop-types";
import "./Button.css";
import isEmptyText from "@core/utils/isEmptyText";
import { Link } from "react-router-dom";

const Button = ({
  className = "",
  color = "primary",
  size = "default",
  to,
  children,
  onClick,
  disabled = false,
  type = "button",
  ["aria-label"]: ariaLabel,
}) => {
  className = `button button--${color} button--size--${size} ${className}`;

  if (!isEmptyText(to)) {
    return (
      <Link className={className} to={to} disabled={disabled} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "default", "lg"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  to: PropTypes.string,
  "aria-label": PropTypes.string,
};

Button.defaultProps = {
  className: "",
  color: "primary",
  size: "default",
  disabled: false,
  type: "button",
  children: "Label",
  "aria-label": "Label",
};

export default Button;
