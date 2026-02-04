import {  useTranslation } from "react-i18next";
import { View, Text } from "react-native";
import {useTheme} from "@react-navigation/native";

export const Header = () => {
  const { t } = useTranslation();
    const {colors} = useTheme();

  return (
    <View style={[styles.headerView,{backgroundColor:colors.primary}]}>
    <Text style={styles.headerText}>{t("homePage.yourCourses")}</Text>
    </View>
  );
};

const styles = {
    headerView:{
        padding:10,
        paddingTop: 20,
        paddingBottom: 15,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 600,
    }
}
