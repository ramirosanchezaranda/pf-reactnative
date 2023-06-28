import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item.id)}>
      <View style={styles.headerContainer}>
        <Text style={styles.date}>
          {formatDate(item.date)} || #{item.id}
        </Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.body}>
          <Text style={styles.total}>Total: $ {item.total}</Text>
        </View>
        <Text>Ver mas...</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;
