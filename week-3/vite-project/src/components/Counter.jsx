import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("Count is aangepast naar ", count);
  }, [count]);

  return (
    <div>
      <p>Count {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>Hello</h1>
    </div>
  );
};

export default Counter;
