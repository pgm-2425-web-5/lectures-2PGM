import PropTypes from "prop-types";
import "./Label.css";

const Label = ({ children, className = "", htmlFor, error }) => {
  return (
    <label className={`label ${error ? "label--error" : ""} ${className}`} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  error: PropTypes.bool,
};

export default Label;
