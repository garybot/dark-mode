import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';
// import classNames from 'classnames';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('isModeDark');
  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    console.log(body);
    if (darkMode) {
      body.className = "dark-mode";
    } else {
      body.className = "";
    }
  }, [darkMode])
  return [darkMode, setDarkMode]
}