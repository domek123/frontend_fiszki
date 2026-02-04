// theme.ts

export const lightTheme = {
  dark: false,
  colors: {
    primary: "#6D28D9", // Głęboki fiolet (Vivid Violet)
    background: "#F1F5F9", // Jasny błękitny szary (Slate 100)
    card: "#FFFFFF", // Czysta biel dla kontrastu
    text: "#0F172A", // Bardzo ciemny granat (Slate 900)
    border: "#E2E8F0", // Delikatny szary
    notification: "#F43F5E", // Neonowy koral (do błędów)
    button: "#6D28D9", // Fioletowy przycisk
    accent: "#06B6D4", // Cyan - dla dodatkowych elementów
    success: "#10B981", // Szmaragdowy
  },
};

export const darkTheme = {
  dark: true,
  colors: {
    primary: "#A78BFA", // Neonowy lawendowy (świetlisty na ciemnym tle)
    background: "#020617", // Bardzo głęboka czerń (Slate 950)
    card: "#0F172A", // Ciemny granat (Slate 900) - powierzchnia fiszek
    text: "#F8FAFC", // Lodowa biel (Slate 50)
    border: "#1E293B", // Stalowy granat (Slate 800)
    notification: "#FB7185", // Cyber różowy (Soft Rose) - dla "Nie znam"
    button: "#7C3AED", // Intensywny fiolet
    link: "#22D3EE", // Neonowy turkus (Cyan 400)
    success: "#34D399", // Neonowa mięta - dla "Znam"
    highlight: "#1E1B4B", // Bardzo ciemny fioletowy odcień dla zaznaczeń
  },
};

export type ThemeType = typeof lightTheme;
