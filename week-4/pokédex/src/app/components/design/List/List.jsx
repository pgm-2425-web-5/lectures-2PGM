import "./List.css";

const List = ({ className = "", tag = "ul", type = "list", children }) => {
  const Tag = tag;
  return <Tag className={`list list--${type} ${className}`}>{children}</Tag>;
};

export default List;
