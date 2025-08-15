import { NavigationContainer } from "@react-navigation/native";
import "./src/i18n";
import { myTheme } from "./theme";
import { StackNavigation } from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={myTheme}>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
