import {
  UI_AUTH_SET_SPLASH,
  UI_AUTH_SET_LOGIN,
  UI_AUTH_SET_REGISTER,
  UI_AUTH_SET_AUTHENTICATED,
  UI_FRIDGE_SET_PROFILE,
  UI_FRIDGE_SET_LIST
} from "../actions/types";

const initialState = {
  authStatus: {
    isAuthenticated: false,
    doLogin: false,
    doRegister: false
  },
  isFridge: false,
  fridgeOptions: {
    profile: "group",
    list: "products"
  },
  isCommunity: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UI_AUTH_SET_SPLASH:
      return {
        ...state,
        authStatus: {
          isAuthenticated: false,
          doLogin: false,
          doRegister: false
        }
      };

    case UI_AUTH_SET_LOGIN:
      return {
        ...state,
        authStatus: {
          isAuthenticated: false,
          doLogin: true,
          doRegister: false
        }
      };

    case UI_AUTH_SET_REGISTER:
      return {
        ...state,
        authStatus: {
          isAuthenticated: false,
          doLogin: false,
          doRegister: true
        }
      };

    case UI_AUTH_SET_AUTHENTICATED:
      return {
        ...state,
        authStatus: {
          isAuthenticated: true,
          doLogin: false,
          doRegister: false
        },
        isFridge: true
      };

    case UI_FRIDGE_SET_PROFILE:
      return {
        ...state,
        isFridge: true,
        fridgeOptions: {
          profile: action.payload,
          list: state.fridgeOptions.list
        }
      };

    case UI_FRIDGE_SET_LIST:
      return {
        ...state,
        isFridge: true,
        fridgeOptions: {
          profile: state.fridgeOptions.profile,
          list: action.payload
        }
      };

    default:
      return state;
  }
}
