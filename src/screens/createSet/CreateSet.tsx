import { useCreateSetContext, useTheme } from "@/context";
import { TextButton } from "@/components";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { LanguageSelect } from "./components";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

export const CreateSet = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const { theme } = useTheme();
  const styles = createStyles(theme.colors);

  const { setData, handleChange, handleCreateSet, resetFlashCard } =
    useCreateSetContext();

  return (
    <View style={styles.container}>
      <Text>{t("createSet.name")}</Text>
      <TextInput
        style={styles.textInput}
        value={setData.name}
        onChangeText={(value) => handleChange("name", value)}
      />
      <Text>{t("createSet.description")}</Text>
      <TextInput
        style={styles.textInput}
        value={setData.description}
        onChangeText={(value) => handleChange("description", value)}
      />
      <Text>{t("createSet.language")}</Text>
      <LanguageSelect />
      <TextButton
        text={t("createSet.buttonText")}
        bgColor={theme.colors.card}
        action={() => {
          handleCreateSet();
        }}
      />
      <TextButton
        text={t("createSet.addFlashcards")}
        bgColor={theme.colors.button}
        action={() => {
          resetFlashCard();
          navigation.navigate("CreateFlashcard");
        }}
      />
    </View>
  );
};

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      padding: 16,
      gap: 12,
      borderRadius: 8,
      backgroundColor: colors.border,
    },
    textInput: {
      borderWidth: 1,
      borderRadius: 8,
      borderColor: "lightgray",
    },
  });
