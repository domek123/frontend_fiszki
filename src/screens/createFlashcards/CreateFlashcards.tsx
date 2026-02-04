import { HeaderText } from "@components/index";
import { SafeAreaView } from "react-native-safe-area-context";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import { FlashcardForm } from "./FlashardForm";
import { SvgUri } from "react-native-svg";
import { useCreateSetContext } from "@context/CreateSet.context";
import { useTranslation } from "react-i18next";
import {useTheme} from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

export const CreateFlashcards = () => {
  const { t } = useTranslation();

  const { setData, editId } = useCreateSetContext();
    const {colors} = useTheme();

  return (
    <SafeAreaView>
        <View style={[styles.header,{backgroundColor:colors.primary}]}>
            <TouchableOpacity>
                <Icon name="chevron-left" size={30} />
            </TouchableOpacity>
            <HeaderText text={t(`createFlashcard.${editId ? "editTitle" : "title"}`)}/>
        </View>
        <FlashcardForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
      padding:10,
      paddingTop: 20,
      paddingBottom: 15,
      flexDirection: "row",
      alignItems: "center",
  },
});
