import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a ThemeContext
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeProvider component to manage theme state
export function Providers({ children }) {
  const [theme, setTheme] = useState('light');

  // Load the preferred theme from local storage or set default theme
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.className = storedTheme; // Apply theme to the root element
  }, []);

  // Function to toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme; // Apply the new theme to the root element
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}




// import { ThemeProvider } from 'next-themes';

// export function Providers({ children }) {
//   return <ThemeProvider attribute="class">{children}</ThemeProvider>;
// }




// 'use client';

// import { ThemeProvider } from 'next-themes';

// export function Providers({ children }: { children: React.ReactNode }) {
//   return <ThemeProvider attribute="class">{children}</ThemeProvider>;
// }
