import { useState } from "react";

const ToggleTextCheckbox = () => {
  const [showText, setShowText] = useState(false);

  const toggleBtn = (e) => {
    setShowText(e.target.checked);
  };

  return (
    <>
      <label htmlFor="toggle">{!showText ? "Reveal" : "Hide"} the hidden message</label>
      <input type="checkbox" id="toggle" value={showText} onChange={toggleBtn} />
      {showText && <p className={`msg`}>Hidden Message</p>}
    </>
  );
};

export default ToggleTextCheckbox;
