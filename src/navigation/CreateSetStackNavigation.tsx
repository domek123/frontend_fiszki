import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateSetProvider } from "@/context"; // <- Twój provider// jeśli będziesz mieć kolejne ekrany
import { CreateSetPage } from "@screens/createSet";

const Stack = createNativeStackNavigator();

export default function CreateSetStack() {
  return (
    <CreateSetProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CreateSet" component={CreateSetPage} />
      </Stack.Navigator>
    </CreateSetProvider>
  );
}
