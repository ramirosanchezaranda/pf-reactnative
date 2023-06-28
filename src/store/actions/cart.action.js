import { Alert } from 'react-native';

import { FIREBASE_REALTIME_DB_URL } from './../../constants/firebase';
import { MAPS_API_KEY } from '../../utils/maps';
import { cartTypes } from '../types';

const { ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_ORDER } = cartTypes;

export const addProductById = (id) => ({
  type: ADD_TO_CART,
  productId: id,
});

export const deleteProductById = (id) => ({
  type: REMOVE_FROM_CART,
  productId: id,
});

export const confirmOrder = (cart, total, coords) => {
  return async (dispatch) => {
    let address;
    try {
      const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${MAPS_API_KEY}`);
      if (!res.ok) throw new Error('No se pudo comunicar con la API de Google Maps');
      const resData = await res.json();
      if (!resData.results) throw new Error('No se han encontrado datos para los coordenadas seleccionadas');
      address = resData.results[0].formatted_address;
    } catch (error) {
      console.log(`Error al obtener dirección del usuario - ${error}`);
    }

    const body = {
      date: Date.now(),
      total,
      items: cart,
      coords,
      address,
    };

    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/orders.json`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      const isConfirm = !!data.name;

      if (isConfirm) {
        Alert.alert(
          'Orden confirmada',
          `Pedido #${data.name} creado exitosamente!`,
          [
            {
              text: 'OK',
            },
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          'Orden fallida',
          'No se pudo confirmar la orden. Intente nuevamente.',
          [
            {
              text: 'OK',
            },
          ],
          { cancelable: false }
        );
      }

      dispatch({
        type: CONFIRM_ORDER,
        isConfirm,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
