import classes from "./Container.module.css";

const Container = ({ className = "", children }) => {
  return <div className={`${classes.container} ${className}`}>{children}</div>;
};

export default Container;
