import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../../constants/theme';
import { Categories, Products, ProductDetail } from '../../screens';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        contentStyle: { backgroundColor: theme.colors.background, paddingBottom: 75 },
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: theme.colors.background,
        headerTitleStyle: {
          fontFamily: theme.fonts.fontFamily.bold,
        },
      }}>
      <Stack.Screen name="Home" component={Categories} options={{ title: 'Categorías de productos' }} />
      <Stack.Screen name="Products" component={Products} options={({ route }) => ({ title: route.params.categoryName })} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} options={({ route }) => ({ title: route.params.productName })} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
