import React from 'react';

import useKeyboardShortcut from '../useKeyboardShortcut';

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const KEY = 'mode';

const defaultContextData = {
  dark: false,
  toggleDark: () => {},
};

export const ThemeContext = React.createContext(defaultContextData);

const useTheme = () => React.useContext(ThemeContext);

const storage = {
  get: (init?: Theme) => window.localStorage.getItem(KEY) || init,
  set: (value: Theme) => window.localStorage.setItem(KEY, value),
};

const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true;

const useDarkMode = (): [Theme, (theme?: Theme) => void] => {
  const [themeState, setThemeState] = React.useState(Theme.LIGHT);

  const setThemeStateEnhanced = (themeValue?: Theme) => {
    setThemeState((prevState) => {
      const nextState = themeValue
        ? themeValue
        : prevState === Theme.LIGHT
        ? Theme.DARK
        : Theme.LIGHT;

      //document.body.classList.remove('laodeaksar-' + prevState);
      //document.body.classList.add('laodeaksar-' + nextState);

      document.body.classList.remove(prevState);
      document.body.classList.add(nextState);
      document.documentElement.style.setProperty('color-scheme', nextState);
      storage.set(nextState);

      return nextState;
    });
  };

  React.useEffect(() => {
    const storedMode = storage.get();

    if (!storedMode && supportsDarkMode()) {
      return setThemeStateEnhanced(Theme.DARK);
    }

    if (!storedMode || storedMode === themeState) {
      return;
    }

    setThemeStateEnhanced();
  }, [themeState]);

  return [themeState, setThemeStateEnhanced];
};

const ThemeProvider = (props: React.PropsWithChildren) => {
  const { children } = props;

  const [themeState, setThemeStateEnhanced] = useDarkMode();

  const toggleDark = React.useCallback(() => {
    setThemeStateEnhanced();
  }, [setThemeStateEnhanced]);

  useKeyboardShortcut('ctrl+t', toggleDark);

  React.useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        setThemeStateEnhanced(e.matches ? Theme.DARK : Theme.LIGHT);
      });
  }, [setThemeStateEnhanced, toggleDark]);

  return (
    <ThemeContext.Provider
      value={{
        dark: themeState === Theme.DARK,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default useTheme;
