import { useState } from "react";

const FilterList = () => {
  const products = [
    "Laptop",
    "Smartphone",
    "Koptelefoon",
    "Boek",
    "Tafel",
    "Stofzuiger",
    "Koffiemachine",
    "Televisie",
    "Fiets",
    "Kledingkast",
  ];

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) => p.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <input
        type="text"
        placeholder="Zoeken"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </>
  );
};

export default FilterList;
