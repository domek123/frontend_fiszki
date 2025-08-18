import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateSetProvider } from "@/context"; // <- Twój provider// jeśli będziesz mieć kolejne ekrany
import { CreateSetPage, CreateFlashcards } from "@/screens";

const Stack = createNativeStackNavigator();

export default function CreateSetStack() {
  return (
    <CreateSetProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CreateSet" component={CreateSetPage} />
        <Stack.Screen name="CreateFlashcards" component={CreateFlashcards} />
      </Stack.Navigator>
    </CreateSetProvider>
  );
}
