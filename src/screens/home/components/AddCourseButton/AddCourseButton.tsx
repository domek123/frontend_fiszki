import { useTheme } from "@context/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export const AddCourseButton = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.colors.button,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        right: 20,
      }}
      onPress={() => navigation.navigate("CreateSet")}
    >
      <Icon name="add" size={24} color={"white"} />
    </TouchableOpacity>
  );
};
