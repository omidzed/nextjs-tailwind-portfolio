import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
  // Set the initial theme based on local storage or default to 'light'
  const [theme, setTheme] = useState(
    typeof window !== 'undefined'
      ? localStorage.getItem('theme') ||
          (window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light')
      : 'dark' // Use 'dark' as the default if window is not available
  );

  // This function toggles the theme from 'light' to 'dark' or vice versa
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove both to ensure no class is left behind in case of any issue
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, toggleTheme]; // Return the current theme and the toggle function
};

export default useThemeSwitcher;
