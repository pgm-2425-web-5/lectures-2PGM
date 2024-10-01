import { useState } from "react";

const InputExample = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <p>Mijn naam is {name}</p>
      <input type="text" placeholder="naam" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default InputExample;
