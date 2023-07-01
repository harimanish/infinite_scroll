import React, { createContext, useState } from 'react';

type AuthContextType = {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialAuthContext: AuthContextType = {
  isLogged: false,
  setIsLogged: () => {
    throw new Error('setIsLogged function must be overridden');
  },
};

export const AuthContext = createContext<AuthContextType>(initialAuthContext);

type AuthProviderProps = React.PropsWithChildren<object>; // Add children prop

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const value: AuthContextType = {
    isLogged,
    setIsLogged,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
