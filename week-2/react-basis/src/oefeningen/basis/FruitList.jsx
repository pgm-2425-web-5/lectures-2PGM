const FruitList = () => {
  const fruits = ["banaan", "mango", "aardbei", "kiwi"];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
};

export default FruitList;
