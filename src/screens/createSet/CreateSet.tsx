import { useTheme } from "@/context";
import { Button } from "@components/Button";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { LanguageSelect } from "./components";
import { useTranslation } from "react-i18next";

export const CreateSet = () => {
  const { t } = useTranslation();

  const { theme } = useTheme();
  const styles = createStyles(theme.colors);

  return (
    <View style={styles.container}>
      <Text>{t("createSet.name")}</Text>
      <TextInput style={styles.textInput} />
      <Text>{t("createSet.description")}</Text>
      <TextInput style={styles.textInput} />
      <Text>{t("createSet.language")}</Text>
      <LanguageSelect />
      <Button
        text={t("createSet.buttonText")}
        bgColor={theme.colors.card}
        action={() => {
          console.log("utworzono");
        }}
      />
      <Button
        text={t("createSet.addFlashcards")}
        bgColor={theme.colors.button}
        action={() => {
          console.log("dodano fiszki");
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
