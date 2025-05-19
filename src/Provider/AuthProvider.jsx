import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return savedTheme || (systemPrefersDark ? 'dark' : 'light');
});

useEffect(() => {
  const html = document.documentElement;
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}, [theme]);

const toggleTheme = () => {
  setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
};

    const AllCom = {
        theme,
        toggleTheme
    }
    return <AuthContext value={AllCom}>{children}</AuthContext>;
};

export default AuthProvider;