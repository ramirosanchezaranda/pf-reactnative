import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import { styles } from './styles';

const ProductItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerTouchable} onPress={() => onSelected(item)}>
        <View style={styles.imageContainer}>
          <Image resizeMode="cover" source={{ uri: item.image }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>$ {item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
