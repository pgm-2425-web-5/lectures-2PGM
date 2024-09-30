import "./Button.css";

const Button = ({ color = "primary", children, type = "button", disabled = false }) => {
  return (
    <button className={`btn btn-${color}`} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
