import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  const loginContext = () => {
    
    setIsAuthenticated(true);
  };

  const logoutContext = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginContext, logoutContext }}>
      {children}
    </AuthContext.Provider>
  );
};