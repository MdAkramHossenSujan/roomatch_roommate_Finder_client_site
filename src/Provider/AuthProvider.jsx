import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            setTheme(savedTheme);
        } else if (systemPrefersDark) {
            setTheme('dark');
        }
    }, []);

    useEffect(() => {
        const html = document.documentElement;
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    const toggleTheme = () => {
        console.log('Working')
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    const AllCom = {
        toggleTheme
    }
    return <AuthContext value={AllCom}>{children}</AuthContext>;
};

export default AuthProvider;