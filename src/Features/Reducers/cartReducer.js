import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from "../Actions/cartActions";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case UPDATE_CART_ITEM:
      const updatedItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          const newQuantity = action.payload.quantity >= 0 ? action.payload.quantity : item.quantity;
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      });
      return {
        ...state,
        items: updatedItems,
      };
    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
