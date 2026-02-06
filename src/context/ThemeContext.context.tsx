import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';
import { useColorScheme } from 'react-native'; // Dodane do wykrywania motywu systemu
import { lightTheme, darkTheme, ThemeType } from '../../theme';

type ThemeContextProps = {
  theme: ThemeType;
  toggleTheme: () => void;
  isDark: boolean;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const colorScheme = useColorScheme();

  const [isDark, setIsDark] = useState(colorScheme === 'dark');

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({
      theme: isDark ? darkTheme : lightTheme,
      toggleTheme,
      isDark,
    }),
    [isDark, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
