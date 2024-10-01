import { useState } from "react";

const UserInfo = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <>
      <p>Jouw naam: {name}</p>
      <input
        type="text"
        placeholder="naam"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <p>Jouw leeftijd: {age}</p>
      <input
        type="text"
        placeholder="leeftijd"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
    </>
  );
};

export default UserInfo;
