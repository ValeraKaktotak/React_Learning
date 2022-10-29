import {LoginApi} from "../api/api";
import {logOutHeaderAuthThunkActionCreator, AuthThunkActionCreator} from "./auth-reducer";
import {stopSubmit} from "redux-form";


const confirmLoginActionCreatorConst = 'CONFIRM-LOGIN';

export const confirmLoginActionCreator = (loginData) => {
    return {
        type: confirmLoginActionCreatorConst,
        loginData
    }
}

export const loginUserThunkActionCreator = (email, password, rememberMe) => {
    return async (dispatch) => {
        let loginResponse = await LoginApi.login(email, password, rememberMe)
        if (loginResponse.resultCode === 0) {
            dispatch(AuthThunkActionCreator())
        } else {
            let message = loginResponse.messages.length > 0 ? loginResponse.messages[0] : "Some error";
            let formErrorAction = stopSubmit("login", {_error: message});
            dispatch(formErrorAction);
        }
    }
}

export const logOutUserThunkActionCreator = () => {
    return async (dispatch) => {
        let logOutResponse = await LoginApi.logOut()
        if (logOutResponse.resultCode === 0) {
            dispatch(logOutHeaderAuthThunkActionCreator())
        }
    }
}

//передаем часть данных связанных с данным редьюсером для первого рендера(создание state)
const init = {
    loginData: []
}
const loginReducer = (state = init, action) => {
    switch (action.type) {
        case confirmLoginActionCreatorConst:
            return {
                ...state,
                loginData: [...action.loginData]
            }
    }
    return state
}

export default loginReducer