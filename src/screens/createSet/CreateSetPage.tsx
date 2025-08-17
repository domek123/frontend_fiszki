import { HeaderText } from "@/components";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CreateSet } from "./CreateSet";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useTranslation } from "react-i18next";

export const CreateSetPage = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-left" size={30} />
        </TouchableOpacity>
        <HeaderText text={t("createSet.title")} />
      </View>
      <CreateSet />
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
