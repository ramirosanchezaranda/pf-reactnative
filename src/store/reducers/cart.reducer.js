import { PRODUCTS } from '../../data/products';
import { cartTypes } from '../types';

const { ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_ORDER } = cartTypes;

// Función para eliminar un producto por ID del array y devuelve un nuevo carrito.
function deleteProductById(idProd, cart) {
  const updatedCart = cart.filter((product) => product.id !== idProd);
  console.warn('Producto eliminado correctamente');
  return updatedCart;
}

// Función para agregar un producto por ID al array y devuelve un nuevo carrito.
function addProductById(idProd, cart) {
  const productInCart = cart.find((product) => product.id === idProd);
  if (productInCart) {
    const updatedCart = cart.map((product) => {
      if (product.id === idProd) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    return updatedCart;
  } else {
    const product = PRODUCTS.find((product) => product.id === idProd);
    cart.push({ ...product, quantity: 1 });
    return cart;
  }
}

const sumarTotal = (cartArray) => {
  const total = cartArray.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);
  return total;
};

const initialState = {
  data: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const cart = addProductById(action.productId, state.data);
      return {
        ...state,
        data: [...cart],
        total: sumarTotal(cart),
      };
    }
    case REMOVE_FROM_CART: {
      const cart = deleteProductById(action.productId, state.data);
      return {
        ...state,
        data: cart,
        total: sumarTotal(cart),
      };
    }
    case CONFIRM_ORDER: {
      return {
        ...state,
        data: action.isConfirm ? [] : state.data,
        total: action.isConfirm ? 0 : state.total,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
