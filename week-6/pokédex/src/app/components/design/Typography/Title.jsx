import "./Title.css";

const Title = ({ children, className = "", level = 1 }) => {
  const Tag = `h${level}`;
  return <Tag className={`title ${className}`}>{children}</Tag>;
};

export default Title;
