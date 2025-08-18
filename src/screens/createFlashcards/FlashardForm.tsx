import { Button } from "@components/Button";
import { useCreateSetContext, useTheme } from "@/context";
import { useTranslation } from "react-i18next";
import { StyleSheet, TextInput, View, Text } from "react-native";

export const FlashcardForm = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const {
    flashcardName,
    flashcardDefinition,
    addFlashCard,
    setFlashcardName,
    setFlashcardDefinition,
  } = useCreateSetContext();

  return (
    <View style={styles.container}>
      <Text>{t("createFlashcard.front")}</Text>
      <TextInput
        value={flashcardName}
        onChangeText={setFlashcardName}
        style={styles.textInput}
      />
      <Text>{t("createFlashcard.back")}</Text>
      <TextInput
        value={flashcardDefinition}
        onChangeText={setFlashcardDefinition}
        style={styles.textInput}
      />
      <Button
        text={t("createFlashcard.buttonText")}
        bgColor={theme.colors.button}
        action={addFlashCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
    borderRadius: 8,
    backgroundColor: "white",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "lightgray",
  },
});
