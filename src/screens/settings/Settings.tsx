import { SafeAreaView, Text, View } from "react-native";
import GlobalStyles from "@/styles/GlobalStyles";
export const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={[GlobalStyles.center, GlobalStyles.SAV]}>
      <View>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
};
