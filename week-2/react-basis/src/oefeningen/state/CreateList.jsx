import { useState } from "react";

const CreateList = () => {
  const [inputText, setInputText] = useState("");

  const separator = ";";

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const listItems = inputText
    .split(separator)
    .map((item) => item.trim())
    .filter((item) => item !== "");

  return (
    <>
      <input
        className="input"
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="item 1;item2;test;hallo"
      />
      <ul>
        {listItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default CreateList;
