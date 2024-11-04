import "./IconButton.css";

const IconButton = ({
  icon: Icon,
  className = "",
  type = "button",
  size = "default",
  disabled = false,
  ["aria-label"]: ariaLabel,
  onClick,
}) => {
  return (
    <button
      className={`btn-icon btn-icon--size-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
    >
      <Icon />
    </button>
  );
};

export default IconButton;
