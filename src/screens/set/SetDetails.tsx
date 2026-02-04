import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { SetSettingsRouteParams } from "./types";

export const SetDetails = () => {
  const route = useRoute<SetSettingsRouteParams>();
  const { setId, flashcards_amount } = route.params;

  return (
    <SafeAreaView>
      <Text>Set ID: {setId}</Text>
      <Text>Flashcards Amount: {flashcards_amount}</Text>
    </SafeAreaView>
  );
};
