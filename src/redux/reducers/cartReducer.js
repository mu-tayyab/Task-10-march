import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  CHECKOUT,
} from '../actions/action-types/cart-actions';

const initState = {
  addedItems: [],
  totalAddedItems: 0,
  totalPrice: 0,
};
const cartReducer = (state = initState, action) => {
  console.log('ss', state);
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let existed_item = state.addedItems.find(
      item => item.id === action.payload.id,
    );
    if (existed_item) {
      return {
        ...state,
      };
    }
    let newTotal = state.totalPrice + action.payload.price;
    let newTotalAddedItems = state.totalAddedItems + 1;
    action.payload.quantity = 1;

    return {
      ...state,
      addedItems: [...state.addedItems, action.payload],
      totalAddedItems: newTotalAddedItems,
      totalPrice: newTotal,
    };
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let existed_item = state.addedItems.find(
      item => item.id === action.payload.id,
    );
    if (existed_item) {
      let newTotal = state.totalPrice + action.payload.price;
      existed_item.quantity += 1;
      console.log('exist', existed_item);
      return {
        ...state,
        // addedItems: [...state.addedItems, ...existed_item],
        totalPrice: newTotal,
      };
    }
    return {
      ...state,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.addedItems.find(
      item => item.id === action.payload.id,
    );
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(
        item => item.id !== action.payload.id,
      );
      let newTotal = state.totalPrice - addedItem.price;
      let TotalAddedItems = state.totalAddedItems - 1;

      return {
        ...state,
        addedItems: new_items,
        totalAddedItems: TotalAddedItems,
        totalPrice: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.totalPrice - addedItem.price;
      return {
        ...state,
        totalPrice: newTotal,
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6,
    };
  }

  if (action.type === CHECKOUT) {
    return {
      ...initState,
    };
  } else {
    return state;
  }
};

export default cartReducer;
