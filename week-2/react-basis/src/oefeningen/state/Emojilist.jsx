import emojis from "./emojis.json";
import { useState } from "react";

const EmojiList = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredEmojis = emojis.filter(
    (emoji) => emoji.title.includes(search.toLowerCase()) || emoji.keywords.includes(search.toLowerCase())
  );

  return (
    <>
      <p>Search for: </p>
      <input type="text" placeholder="" value={search} onChange={handleChange} />
      <br />
      <br />

      <div className="grid">
        {filteredEmojis.map((emoji, index) => (
          <div className="grid-item" key={index}>
            <p>{emoji.title}</p>
            <p>{emoji.symbol}</p>
            <p>{emoji.keywords}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmojiList;
