import {
  GROUP_GET_INFO,
  GROUP_GET_USERS,
  GROUP_GET_PRODUCTS,
  GROUP_USERS_LOADING,
  GROUP_PRODUCTS_LOADING
} from "../actions/types";

const initialState = {
  currentGroup: {
    id: 3
  },
  users: [],
  products: [],
  usersLoading: false,
  productsLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GROUP_GET_INFO:
      return {
        ...state,
        currentGroup: action.payload
      };
    case GROUP_GET_USERS:
      return {
        ...state,
        users: action.payload,
        usersLoading: false
      };
    case GROUP_GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsLoading: false
      };
    case GROUP_USERS_LOADING:
      return {
        ...state,
        usersLoading: true
      };
    case GROUP_PRODUCTS_LOADING:
      return {
        ...state,
        productsLoading: true
      };
    default:
      return state;
  }
}
