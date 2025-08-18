import { HeaderText } from "@/components";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CreateSet } from "./CreateSet";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useTranslation } from "react-i18next";
import { useCreateSetContext } from "@context/CreateSet.context";
import { Flashcard } from "./components/Flashcard/Flashcard";
import { useMemo } from "react";

export const CreateSetPage = () => {
  const { t } = useTranslation();
  const { flashcards } = useCreateSetContext();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-left" size={30} />
        </TouchableOpacity>
        <HeaderText text={t("createSet.title")} />
      </View>
      <CreateSet />
      {flashcards.length > 0 && (
        <Flashcard
          id={0}
          front={t("createFlashcard.front")}
          back={t("createFlashcard.back")}
          delete={false}
        />
      )}
      <ScrollView style={{ gap: 8 }}>
        {flashcards.map((flashcard, index) => (
          <Flashcard key={index} {...flashcard} id={index} delete={true} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
