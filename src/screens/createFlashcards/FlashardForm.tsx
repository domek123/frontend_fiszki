import { TextButton } from "@/components";
import { useCreateSetContext, useTheme } from "@/context";
import { useTranslation } from "react-i18next";
import { StyleSheet, TextInput, View, Text } from "react-native";

export const FlashcardForm = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const {
    flashcardName,
    flashcardDefinition,
    handleFlashCard,
    setFlashcardName,
    setFlashcardDefinition,
    editId,
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
      <TextButton
        text={t(
          `createFlashcard.${
            editId ? "editFlashcardText" : "createFlashcardText"
          }`
        )}
        bgColor={theme.colors.button}
        action={handleFlashCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
    borderRadius: 8,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "lightgray",
  },
});
