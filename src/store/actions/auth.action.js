import { FIREBASE_AUTH_SIGN_IN_URL, FIREBASE_AUTH_SIGN_UP_URL } from '../../constants';
import { authTypes } from '../types';

const { SIGN_IN, SIGN_UP } = authTypes;

export const signUp = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(FIREBASE_AUTH_SIGN_UP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Algo salio mal :(');
      }

      const data = await response.json();

      dispatch({
        type: SIGN_UP,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const signIn = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(FIREBASE_AUTH_SIGN_IN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();

      dispatch({
        type: SIGN_IN,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      throw error;
    }
  };
};
