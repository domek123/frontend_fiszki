import { useCreateSetContext } from "@context/CreateSet.context";
import { FlashcardType } from "./Flashcard.types";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
export const Flashcard = (props: FlashcardType) => {
  const { deleteFlashcard } = useCreateSetContext();

  return (
    <View style={styles.container}>
      <Text>{props.front}</Text>
      <Text>{props.back}</Text>
      <TouchableOpacity onPress={() => deleteFlashcard(props.id)}>
        {props.delete && <Icon name="delete" size={24} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    marginTop: 8,
  },
  front: {
    fontSize: 18,
    fontWeight: "bold",
  },
  back: {
    fontSize: 16,
    color: "#666",
  },
});
