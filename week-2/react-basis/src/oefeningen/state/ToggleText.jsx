import { useState } from "react";

const ToggleText = () => {
  const [status, setStatus] = useState(false);

  const toggleBtn = () => {
    setStatus(!status);
  };

  return (
    <>
      <button onClick={() => toggleBtn()}>{!status ? "Reveal" : "Hide"} the hidden message</button>
      <p className={`msg msg--${status}`}>Hidden Message</p>
    </>
  );
};

export default ToggleText;
