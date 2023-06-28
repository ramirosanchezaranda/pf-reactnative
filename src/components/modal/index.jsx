import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { View, Text, Button, TouchableOpacity, FlatList, ScrollView } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants/theme';
import { CartItem, MapPreview } from '../index';

const ModalItem = ({ onCancel, onDelete, selectedItem }) => {
  const renderItem = ({ item }) => <CartItem item={item} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.selectedItem}>Order #{selectedItem?.id}</Text>
        <View>
          <Text>Items del pedido: </Text>
          <FlatList data={selectedItem.items} keyExtractor={keyExtractor} renderItem={renderItem} style={styles.listContainer} scrollEnabled />
        </View>
        <Text style={styles.total}>Total pedido: ${selectedItem.total}</Text>
      </View>
      <ScrollView style={styles.secondContainer}>
        <View style={styles.date}>
          <Text>Fecha y hora de pedido:</Text>
          <Text>{new Date(selectedItem?.date).toLocaleString()}</Text>
        </View>
        <View>
          <Text>Ubicación de entrega: </Text>
          <Text>{selectedItem.address}</Text>
          <MapPreview location={selectedItem.coords} style={styles.MapPreview}>
            <Text>No hay ubicación seleccionada</Text>
          </MapPreview>
        </View>
        <View style={styles.deleteContainer}>
          <Text style={styles.deleteMessage}>¿Deseas borrar la orden?</Text>
          <TouchableOpacity style={styles.delete} onPress={() => onDelete(selectedItem?.id)}>
            <Ionicons name="trash" size={25} color={theme.colors.red} />
            <Text>Borrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Volver a ordenes" color={theme.colors.secondary} onPress={onCancel} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ModalItem;
