import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count + 1 >= 10) {
      window.alert("Jouw waarde mag niet groter dan of gelijk aan 10 zijn");
      return;
    }

    setCount(count + 1);
  };

  return (
    <div className="counter">
      <button onClick={() => setCount(count - 1)} disabled={count <= 0}>
        -
      </button>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
