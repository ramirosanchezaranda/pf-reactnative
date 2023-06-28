import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TouchableOpacity } from 'react-native';

import { theme } from './../../constants/theme';
import { styles } from './styles';

const CartItem = ({ item, onRemove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{item.name}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.content}>
          <Text style={styles.quantity}>cant: {item.quantity}</Text>
          <Text style={styles.price}>
            $ {item.price * item.quantity} ({item.price} c/u)
          </Text>
        </View>
        {onRemove ? (
          <TouchableOpacity onPress={() => onRemove(item.id)}>
            <Ionicons name="trash" size={22} color={theme.colors.red} />
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>
    </View>
  );
};

export default CartItem;
