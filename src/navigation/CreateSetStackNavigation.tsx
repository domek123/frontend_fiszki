import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateSetProvider } from '@/context';
import { CreateSetPage, CreateFlashcards } from '@/screens';

const Stack = createNativeStackNavigator();

export default function CreateSetStack() {
  return (
    <CreateSetProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CreateSet" component={CreateSetPage} />
        <Stack.Screen name="CreateFlashcard" component={CreateFlashcards} />
      </Stack.Navigator>
    </CreateSetProvider>
  );
}
