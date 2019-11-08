import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('isModeDark');
  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    darkMode ? body.classList.add("dark-mode") : body.classList.remove("dark-mode");
  }, [darkMode])
  return [darkMode, setDarkMode]
}