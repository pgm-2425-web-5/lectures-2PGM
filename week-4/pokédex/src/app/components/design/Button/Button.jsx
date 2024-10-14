import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
  className = "",
  color = "primary",
  size = "default",
  children,
  onClick,
  disabled = false,
  type = "button",
  ["aria-label"]: ariaLabel,
}) => {
  return (
    <button
      className={`button button--${color} button--size--${size} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
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
