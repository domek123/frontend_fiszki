import { NavigatorScreenParams } from '@react-navigation/native';

// 1. Parametry dla Stacku tworzenia
export type CreateSetStackParamList = {
  CreateSet: undefined;
  CreateFlashcard: undefined;
};

// 2. Parametry dla Bottom Tab (MainApp)
export type MainTabParamList = {
  Home: undefined;
  Progress: undefined;
  Settings: undefined;
};

// 3. Główny Root Stack
export type RootStackParamList = {
  Login: undefined;
  MainApp: NavigatorScreenParams<MainTabParamList>;
  CreateSetFlow: NavigatorScreenParams<CreateSetStackParamList>;
  SetDetails: { setId: string };
  StudySession: { setId: string };
};
