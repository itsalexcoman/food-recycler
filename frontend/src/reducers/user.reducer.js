import {
  USER_GET_INFO,
  USER_GET_PRODUCTS,
  USER_ADD_PRODUCT,
  USER_DELETE_PRODUCT,
  USER_PRODUCTS_LOADING
} from "../actions/types";

const initialState = {
  currentUser: {
    id: 2
  },
  products: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_GET_INFO:
      return {
        ...state,
        currentUser: action.payload
      };
    case USER_GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case USER_ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case USER_DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(p => p.id !== action.payload)
      };
    case USER_PRODUCTS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
