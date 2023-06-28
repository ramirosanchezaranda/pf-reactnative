import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const CategoryItem = ({ category, onSelected }) => {
  return (
    <TouchableOpacity style={styles.containerTouchable} onPress={() => onSelected(category)}>
      <View>
        <Text style={styles.name}>{category.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
