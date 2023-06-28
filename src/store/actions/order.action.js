import { FIREBASE_REALTIME_DB_URL } from './../../constants/firebase';
import { orderTypes } from '../types';
const { GET_ORDERS, DELETE_ORDER } = orderTypes;

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${FIREBASE_REALTIME_DB_URL}/orders.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await res.json();
      const orders = Object.keys(json).map((key) => ({ ...json[key], id: key }));
      dispatch({ type: GET_ORDERS, orders });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteOrderById = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`${FIREBASE_REALTIME_DB_URL}/orders/${id}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      dispatch({ type: DELETE_ORDER, orderId: id });
    } catch (error) {
      console.log(error);
    }
  };
};
