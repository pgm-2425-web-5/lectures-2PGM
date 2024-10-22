import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser, logout: () => setUser(null) }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthenticationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthenticationProvider;
