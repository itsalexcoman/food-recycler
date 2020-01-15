import axios from "axios";
import {
  GROUP_GET_INFO,
  GROUP_GET_USERS,
  GROUP_GET_PRODUCTS,
  GROUP_USERS_LOADING,
  GROUP_PRODUCTS_LOADING
} from "./types";

export const getGroupInfo = id => dispatch => {
  axios
    .get(process.env.REACT_APP_API_BASEURL + "/groups/" + id)
    .then(result => {
      dispatch({
        type: GROUP_GET_INFO,
        payload: result.data.result
      });
    });
  dispatch(getGroupUsers(id));
  dispatch(getGroupProducts(id));
};

export const getGroupUsers = id => dispatch => {
  dispatch(setProductsLoading());
  axios
    .get(process.env.REACT_APP_API_BASEURL + "/groups/" + id + "/users")
    .then(result => {
      dispatch({
        type: GROUP_GET_USERS,
        payload: result.data.result
      });
    });
};

export const getGroupProducts = id => dispatch => {
  axios
    .get(process.env.REACT_APP_API_BASEURL + "/groups/" + id + "/products")
    .then(result => {
      dispatch({
        type: GROUP_GET_PRODUCTS,
        payload: result.data.result
      });
    });
};

export const setUsersLoading = () => {
  return {
    type: GROUP_USERS_LOADING
  };
};

export const setProductsLoading = () => {
  return {
    type: GROUP_PRODUCTS_LOADING
  };
};
