import { SafeAreaView, Text, View } from "react-native";
import GlobalStyles from "@/styles/GlobalStyles";
export const Progress = ({ navigation }) => {
  return (
    <SafeAreaView style={[GlobalStyles.center, GlobalStyles.SAV]}>
      <View>
        <Text>Progress</Text>
      </View>
    </SafeAreaView>
  );
};
