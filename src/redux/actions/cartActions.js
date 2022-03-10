import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  CHECKOUT,
} from './action-types/cart-actions';

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};
export const removeItem = item => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};
export const subtractQuantity = item => {
  return {
    type: SUB_QUANTITY,
    payload: item,
  };
};
export const addQuantity = item => {
  return {
    type: ADD_QUANTITY,
    payload: item,
  };
};
export const onCheckOut = () => {
  return {
    type: CHECKOUT,
    payload: {},
  };
};
