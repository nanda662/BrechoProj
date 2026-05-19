import React, { createContext, useState, useEffect } from "react";

export const AuthSimpleContext = createContext();

export function AuthSimpleProvider({ children }) {
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    const valor = localStorage.getItem("autenticado");
    setAutenticado(valor === "true");
  }, []);

  const login = () => {
    localStorage.setItem("autenticado", "true");
    setAutenticado(true);
  };

  const logout = () => {
    localStorage.removeItem("autenticado");
    setAutenticado(false);
  };

  return (
    <AuthSimpleContext.Provider value={{ autenticado, login, logout }}>
      {children}
    </AuthSimpleContext.Provider>
  );
}

export default AuthSimpleProvider;
