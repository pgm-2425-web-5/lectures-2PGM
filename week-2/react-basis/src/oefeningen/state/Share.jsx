import { useState } from "react";
const Share = () => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    if (e.target.value.length <= 160) {
      setText(e.target.value);
    }
  };
  return (
    <>
      <textarea value={text} onChange={handleText}></textarea>
      <p>{text.length}</p>
    </>
  );
};

export default Share;
