import { useState } from "react";
import Circle from "./Circle";

const CircleSwitcher = () => {
  const colors = ["orange", "green", "blue", "yellow", "purple"];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const width = 100;

  const handleColorSwitch = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    //door % start hij terug vanaf 0 als hij aan het einde van de array is.
  };

  return (
    <div>
      <Circle width={width} color={colors[currentColorIndex]} />
      <button onClick={handleColorSwitch}>Switch Color</button>
    </div>
  );
};

export default CircleSwitcher;
