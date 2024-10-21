import "./Input.css";
import PropTypes from "prop-types";

const Input = ({
  type = "text",
  multipleLines = false,
  name,
  id,
  placeholder = "",
  value,
  disabled = false,
}) => {
  const Tag = multipleLines ? "textarea" : "input";

  return (
    <Tag
      name={name}
      id={id ?? name}
      className="input"
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "password", "email", "number", "tel"]),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  multipleLines: PropTypes.bool,
};

export default Input;
