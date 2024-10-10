import "./Subtitle.css";

const Subtitle = ({ children, className = "", level = 1, color = "default" }) => {
  const Tag = `h${level}`;
  return <Tag className={`subtitle subtitle--${color} ${className}`}>{children}</Tag>;
};

export default Subtitle;
