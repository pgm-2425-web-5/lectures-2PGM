const Title = ({ showTitle, children }) => {
  if (!showTitle) {
    return null;
  }

  return <h1>{children}</h1>;
};

/* 
const TitleAlt = (props) => {
  return <h1 style={{ fontSize: "1.4rem" }}>{props.content}</h1>;
};
*/

export default Title;
