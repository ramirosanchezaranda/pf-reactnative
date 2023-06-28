import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../../constants/theme';
import { Cart, Checkout, Maps } from '../../screens';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: theme.colors.white, paddingBottom: 70 },
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.white,
        headerTitleStyle: {
          fontFamily: theme.fonts.fontFamily.bold,
          fontSize: theme.fonts.fontSize.title,
        },
      }}>
      <Stack.Screen name="Cart" component={Cart} options={{ title: 'Carrito' }} />
      <Stack.Screen name="Checkout" component={Checkout} options={{ title: 'Checkout' }} />
      <Stack.Screen name="Maps" component={Maps} options={{ title: 'Mapa' }} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
