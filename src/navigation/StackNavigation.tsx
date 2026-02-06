import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '@/screens';
import { BottomTabNavigation } from './BottomTabNavigation';
import CreateSetStack from './CreateSetStackNavigation';
import { SetDetails } from '@screens/set';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainApp" component={BottomTabNavigation} />

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="CreateSetFlow" component={CreateSetStack} />
      </Stack.Group>

      <Stack.Screen name="SetDetails" component={SetDetails} />
    </Stack.Navigator>
  );
};
