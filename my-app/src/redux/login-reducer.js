import {LoginApi} from "../api/api";
import {logOutHeaderAuthThunkActionCreator, setHeaderAuthThunkActionCreator} from "./auth-reducer";
import {stopSubmit} from "redux-form";


const confirmLoginActionCreatorConst = 'CONFIRM-LOGIN';

export const confirmLoginActionCreator = (loginData) => {
    return {
        type: confirmLoginActionCreatorConst,
        loginData
    }
}

export const loginUserThunkActionCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        LoginApi.login(email, password, rememberMe)
        .then(response => {
            if(response.resultCode === 0){
                dispatch(setHeaderAuthThunkActionCreator())
            }
            else{
                let message = response.messages.length > 0? response.messages[0]:"Some error";
                let formErrorAction = stopSubmit("login", {_error: message});
                dispatch(formErrorAction);
            }
        })
    }
}

export const logOutUserThunkActionCreator = () => {
    return (dispatch) => {
        LoginApi.logOut()
            .then(response => {
                if(response.resultCode === 0){
                    dispatch(logOutHeaderAuthThunkActionCreator())
                }
            })
    }
}

//передаем часть данных связанных с данным редьюсером для первого рендера(создание state)
const init = {
    loginData:[]
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