import { View, Text } from "react-native";
import { useAddCourseItemModule } from "./hooks/useAddCourseItemModule";
import { Button } from "@components/Button";

export const AddCourseModule = () => {
  const { items, AddItem } = useAddCourseItemModule();
  return (
    <View>
      {items.map((item) => (
        <Text key={item.id}>
          {item.id} {item.title}
        </Text>
      ))}
      <Button text={"Dodaj"} bgColor={"red"} action={() => AddItem()} />
    </View>
  );
};
