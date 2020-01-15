import axios from "axios";
import {
  USER_GET_PRODUCTS,
  USER_ADD_PRODUCT,
  USER_DELETE_PRODUCT,
  USER_PRODUCTS_LOADING
} from "./types";

export const getUserProducts = id => dispatch => {
  dispatch(setProductsLoading());
  axios
    .get(process.env.REACT_APP_API_BASEURL + "/users/" + id + "/products")
    .then(result => {
      dispatch({
        type: USER_GET_PRODUCTS,
        payload: result.data.result
      });
    });
};

export const addProduct = item => dispatch => {
  axios
    .post(process.env.REACT_APP_API_BASEURL + "/products", item)
    .then(result => {
      dispatch({
        type: USER_ADD_PRODUCT,
        payload: result.data
      });
    });
};

export const deleteProduct = id => dispatch => {
  axios
    .delete(process.env.REACT_APP_API_BASEURL + "/products/" + id)
    .then(result => {
      dispatch({
        type: USER_DELETE_PRODUCT,
        payload: id
      });
    });
};

export const setProductsLoading = () => {
  return {
    type: USER_PRODUCTS_LOADING
  };
};
