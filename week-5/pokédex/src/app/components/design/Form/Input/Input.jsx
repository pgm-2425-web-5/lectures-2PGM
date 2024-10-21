import isEmptyText from "@core/utils/isEmptyText";
import "./Input.css";
import PropTypes from "prop-types";
import Label from "@design/Form/Label/Label";

const Input = ({
  type = "text",
  error,
  label,
  multipleLines = false,
  name,
  id,
  placeholder = "",
  value,
  disabled = false,
  onChange,
  onBlur,
}) => {
  const Tag = multipleLines ? "textarea" : "input";

  const hasError = !isEmptyText(error);

  return (
    <div className="input-group">
      {label && (
        <Label error={hasError} htmlFor={id ?? name}>
          {label}
        </Label>
      )}
      <Tag
        name={name}
        id={id ?? name}
        className={`input ${hasError ? "input--error" : ""}`}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
      />
      {hasError && <span className="input-error">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "password", "email", "number", "tel"]),
  placeholder: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  multipleLines: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Input;
