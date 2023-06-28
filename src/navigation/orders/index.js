import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../../constants/theme';
import { Orders } from '../../screens';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        contentStyle: { backgroundColor: theme.colors.background, paddingBottom: 70 },
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.white,
        headerTitleStyle: {
          fontFamily: theme.fonts.fontFamily.bold,
        },
      }}>
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
