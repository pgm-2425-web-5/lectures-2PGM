import { Outlet } from "react-router";
import Header from "@design/Header/Header";

const App = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <footer>footer</footer>
    </main>
  );
};

export default App;
