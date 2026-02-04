import { StyleSheet, Text } from "react-native";
export const HeaderText = ({ text }: { text: string }) => {
  return <Text style={styles.headerText}>{text}</Text>;
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
