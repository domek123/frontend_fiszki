import { useCreateSetContext } from "@context/CreateSet.context";
import { FlashcardType } from "./Flashcard.types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
export const Flashcard = (props: FlashcardType) => {
  const { deleteFlashcard, setupFlashcard, flashcardsData } =
    useCreateSetContext();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setupFlashcard(props.id)}
    >
      <Text>{props.front}</Text>
      <Text>{props.back}</Text>
      <TouchableOpacity
        onPress={(event) => {
          event.stopPropagation();
          deleteFlashcard(props.id);
        }}
      >
        {props.delete ? (
          <Icon name="delete" size={24} />
        ) : (
          <Text>{flashcardsData.length}</Text>
        )}
      </TouchableOpacity>
    </TouchableOpacity>
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
