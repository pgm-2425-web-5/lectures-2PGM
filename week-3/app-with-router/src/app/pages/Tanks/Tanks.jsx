import { Link } from "react-router-dom";

const Tanks = () => {
  return (
    <>
      <h1>Tanks</h1>
      <ul>
        <li>
          <Link to="/tanks/m1-abrams">M1 Abrams</Link>
        </li>
        <li>
          <Link to="/tanks/leopard-2">Leopard 2</Link>
        </li>
        <li>
          <Link to="/tanks/t-90">T-90</Link>
        </li>
      </ul>
    </>
  );
};

export default Tanks;