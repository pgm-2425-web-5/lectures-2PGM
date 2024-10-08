import classes from "./Button.module.css";

const Button = ({ children }) => {
  return <button className={classes.button}>{children}</button>;
};

export default Button;
