import PropTypes from "prop-types";
import "./List.css";

const List = ({ className = "", tag = "ul", type = "list", children }) => {
  const Tag = tag;
  return <Tag className={`list list--${type} ${className}`}>{children}</Tag>;
};

List.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOf(["ul", "ol"]),
  type: PropTypes.oneOf(["list", "grid"]),
  children: PropTypes.node.isRequired,
};

export default List;
