import { useEffect, useState } from "react";

const List = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(String(error));
      });
  });

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  if (data.length === 0) {
    return <p>Je hebt nog geen auto's</p>;
  }

  return (
    <ul>
      {data.map((car) => (
        <li key={car.name}>{car.name}</li>
      ))}
    </ul>
  );
};

export default List;
