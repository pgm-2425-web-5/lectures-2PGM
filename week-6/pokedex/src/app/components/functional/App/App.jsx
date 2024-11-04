import { Outlet } from "react-router";
import Header from "@design/Header/Header";
import Footer from "@design/Footer/Footer";
import useAuth from "@functional/Auth/useAuth";

const App = () => {
  const { user, logout } = useAuth();

  return (
    <main>
      <Header user={user} onLogout={logout} />
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;
