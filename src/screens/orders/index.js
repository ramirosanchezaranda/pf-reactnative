import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { View, FlatList, Modal } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { OrderItem, ModalItem } from '../../components';
import { deleteOrderById, getOrders } from '../../store/actions';

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.data);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onCancel = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const onHandlerModal = (id) => {
    setModalVisible(true);
    const order = orders.find((item) => item.id === id);
    setSelectedItem(order);
  };

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );

  const keyExtractor = (item) => item.id.toString();
  const onRemove = (id) => {
    dispatch(deleteOrderById(id));
    onCancel();
  };
  const renderItem = ({ item }) => <OrderItem item={item} onPress={onHandlerModal} />;
  return (
    <View style={styles.container}>
      <FlatList data={orders} keyExtractor={keyExtractor} renderItem={renderItem} />
      <Modal visible={modalVisible} animationType="slide" onRequestClose={onCancel}>
        <ModalItem onCancel={onCancel} onDelete={onRemove} selectedItem={selectedItem} />
      </Modal>
    </View>
  );
};

export default Orders;
