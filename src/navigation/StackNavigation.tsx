import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateSetPage, Login } from "@/screens";
import { BottomTabNavigation } from "./BottomTabNavigation";
import { CreateSetProvider } from "@/context";
import CreateSetStack from "./CreateSetStackNavigation";

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main app" component={BottomTabNavigation} />
      <Stack.Screen name="CreateSetFlow" component={CreateSetStack} />
    </Stack.Navigator>
  );
};
