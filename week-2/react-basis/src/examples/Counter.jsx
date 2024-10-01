import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <Button onClick={() => setCount(count - 1)}>-</Button>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </div>
  );
};

export default Counter;
