export interface ThemeColors {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
  button: string;
  accent: string;
  success: string;
  link: string;
  highlight: string;
}

export interface ThemeType {
  dark: boolean;
  colors: ThemeColors;
}

/* 🌤 LIGHT THEME */
export const lightTheme: ThemeType = {
  dark: false,
  colors: {
    primary: '#4F46E5', // Indigo – główny kolor akcji
    background: '#F8FAFC', // Jasne, neutralne tło
    card: '#FFFFFF', // Karty fiszek
    text: '#0F172A', // Główny tekst
    border: '#E5E7EB', // Delikatne separatory
    notification: '#EF4444', // Error / powiadomienia
    button: '#4F46E5', // Spójne z primary
    success: '#22C55E', // Poprawna odpowiedź
    accent: '#38BDF8', // Info / akcent UI
    link: '#2563EB', // Linki
    highlight: '#EEF2FF', // Podświetlenia, aktywna fiszka
  },
};

/* 🌙 DARK THEME */
export const darkTheme: ThemeType = {
  dark: true,
  colors: {
    primary: '#6366F1', // Jaśniejszy indigo pod dark mode
    background: '#020617', // Bardzo ciemne tło (focus)
    card: '#0F172A', // Karty
    text: '#F8FAFC', // Jasny tekst
    border: '#1E293B', // Subtelne obramowania
    notification: '#FB7185', // Error w dark
    button: '#6366F1',
    success: '#34D399',
    accent: '#38BDF8',
    link: '#38BDF8',
    highlight: '#1E293B', // Zaznaczenie / focus
  },
};
