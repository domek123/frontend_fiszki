import { HeaderText } from "@components/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { FlashcardForm } from "./FlashardForm";
import { SvgUri } from "react-native-svg";
import { useCreateSetContext } from "@context/CreateSet.context";
import { useTranslation } from "react-i18next";

export const CreateFlashcards = () => {
  const { t } = useTranslation();

  const { setData, editId } = useCreateSetContext();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <View style={styles.header}>
          <HeaderText
            text={t(`createFlashcard.${editId ? "editTitle" : "title"}`)}
          />
          {setData.languageFrom && (
            <SvgUri
              uri={`https://hatscripts.github.io/circle-flags/flags/${setData.languageFrom}.svg`}
              width="35"
              height="35"
            />
          )}
        </View>
        <FlashcardForm />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  center: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    gap: 16,
  },
});
