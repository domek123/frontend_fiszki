import { StyleSheet, Text } from "react-native";
export const HeaderText = ({ text }: { text: string }) => {
  return <Text style={styles.headerText}>{text}</Text>;
};

const styles = StyleSheet.create({
  headerText: {
    color: "#342D25",
    fontSize: 30,
    fontWeight: "bold",
  },
});
