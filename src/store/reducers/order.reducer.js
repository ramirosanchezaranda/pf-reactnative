import { orderTypes } from '../types';

const { GET_ORDERS, DELETE_ORDER } = orderTypes;

// Función para eliminar una orden por ID de la lista de ordenes del state (NO de la DB, el borrado de la orden en la DB se hace en el action).
function deleteOrderById(id, list) {
  return list.filter((order) => order.id !== id);
}

const initialState = {
  data: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS: {
      return {
        ...state,
        data: action.orders,
      };
    }
    case DELETE_ORDER: {
      const updatedOrders = deleteOrderById(action.orderId, state.data);
      return {
        ...state,
        data: [...updatedOrders],
      };
    }
    default:
      return state;
  }
};

export default orderReducer;
