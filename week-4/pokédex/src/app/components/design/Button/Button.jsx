import "./Button.css";

const Button = ({
  className = "",
  color = "primary",
  size = "default",
  children,
  onClick,
  disabled,
  type,
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

export default Button;
