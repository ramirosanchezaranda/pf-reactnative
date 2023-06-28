import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { confirmOrder } from './../../store/actions';
import { styles } from './styles';
import { LocationSelector } from '../../components';

const Checkout = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);
  const total = useSelector((state) => state.cart.total);

  const [coords, setCoords] = useState(null);

  const handlerConfirm = () => {
    dispatch(confirmOrder(cart, total, coords));
    navigation.navigate('Orders');
  };

  const onLocation = (location) => {
    setCoords(location);
  };

  return (
    <View style={styles.container}>
      <Text>Seleccione la ubicación donde se entregara el pedido:</Text>
      <LocationSelector onLocation={onLocation} />
      <View style={styles.footerContainer}>
        <TouchableOpacity disabled={coords == null || !cart.length} style={styles.buttonConfirm} onPress={handlerConfirm}>
          <Text style={styles.buttonConfirmText}>Confirmar</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>$ {total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkout;
