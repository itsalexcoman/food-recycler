import {
    UI_AUTH_SET_SPLASH, UI_AUTH_SET_LOGIN, UI_AUTH_SET_REGISTER, UI_AUTH_SET_AUTHENTICATED,
    UI_FRIDGE_SET_PROFILE, UI_FRIDGE_SET_LIST
} from './types';

export const setFridgeProfile = () => {
    return {
        type: UI_FRIDGE_SET_PROFILE
    };
};

export const setFridgeList = (list) => {
    return {
        type: UI_FRIDGE_SET_LIST,
        payload: list
    };
}

export const setAuthSplash = () => {
    return {
        type: UI_AUTH_SET_SPLASH
    };
};

export const setAuthLogin = () => {
    return {
        type: UI_AUTH_SET_LOGIN
    };
};

export const setAuthRegister = () => {
    return {
        type: UI_AUTH_SET_REGISTER
    };
};

export const setAuthDone = () => {
    return {
        type: UI_AUTH_SET_AUTHENTICATED
    };
};