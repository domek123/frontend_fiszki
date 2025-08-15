import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, AddCourseView } from "@/screens";
import { BottomTabNavigation } from "./BottomTabNavigation";
import { CustomHeader } from "@/components";
import { CreateCourseProvider } from "@context/CreateCourseContext";

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main app" component={BottomTabNavigation} />

      <Stack.Screen
        name="AddCourse"
        component={() => (
          <CreateCourseProvider>
            <AddCourseView />
          </CreateCourseProvider>
        )}
        options={{
          headerShown: false,
          header: (props) => <CustomHeader {...props} title={"Dodaj Kurs"} />,
        }}
      />
    </Stack.Navigator>
  );
};
