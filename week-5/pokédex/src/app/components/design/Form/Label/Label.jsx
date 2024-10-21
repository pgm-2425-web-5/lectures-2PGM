import PropTypes from "prop-types";
import "./Label.css";

const Label = ({ children, className = "", htmlFor }) => {
  return (
    <label className={`label ${className}`} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
};

export default Label;
