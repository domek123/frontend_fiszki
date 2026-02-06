import {ImageInput, TextButton} from "@/components";
import { useCreateSetContext, useTheme } from "@/context";
import { useTranslation } from "react-i18next";
import { StyleSheet, TextInput, View, Text } from "react-native";
import {useState} from "react";

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

    const [imageUri, setImageUri] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"bold"}}>{t("createFlashcard.front")}</Text>
      <TextInput
        value={flashcardName}
        onChangeText={setFlashcardName}
        style={styles.textInput}
      />
      <Text style={{fontWeight:"bold"}}>{t("createFlashcard.back")}</Text>
      <TextInput
        value={flashcardDefinition}
        onChangeText={setFlashcardDefinition}
        style={styles.textInput}
      />
        <ImageInput onImageSelected={(uri) => setImageUri(uri)}/>
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
