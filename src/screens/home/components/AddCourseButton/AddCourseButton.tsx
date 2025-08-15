import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export const AddCourseButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#0B99DE",
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        right: 20,
      }}
      onPress={() => navigation.navigate("AddCourse")}
    >
      <Icon name="add" size={24} color={"white"} />
    </TouchableOpacity>
  );
};
