import "./ErrorMessage.css";
import isEmptyText from "@core/utils/isEmptyText";

const ErrorMessage = ({ message }) => {
  if (isEmptyText(message)) {
    return null;
  }
  return <p className="error-message">{message}</p>;
};

export default ErrorMessage;
