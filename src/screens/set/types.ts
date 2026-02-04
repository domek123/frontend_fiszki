import { RouteProp } from "@react-navigation/native";

export type SetSettingsRouteParams = RouteProp<
  {
    params: {
      setId: string;
      flashcards_amount: number;
    };
  },
  "params"
>;
