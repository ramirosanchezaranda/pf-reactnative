import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../../constants/theme';
import { Auth } from '../../screens';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        contentStyle: { backgroundColor: theme.colors.background, paddingBottom: 70 },
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
