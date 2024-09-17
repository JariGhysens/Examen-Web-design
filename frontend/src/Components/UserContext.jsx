// UserContext.jsx
import React, { createContext, useState } from 'react';

export const UserContext = createContext(); // Create a context

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null); 

  const login = (user) => {
    console.log('UserContext login', user);
    setLoggedInUser(user); // Function to log in the user
  };

  const logout = () => {
    setLoggedInUser(null); // Function to log out the user
  };

  const isLoggedIn = () => {
    return loggedInUser !== null;
  };

  return (
    <UserContext.Provider value={{ loggedInUser, login, logout, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
