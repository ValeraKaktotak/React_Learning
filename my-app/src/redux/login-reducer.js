import {LoginApi} from "../api/api";
import {logOutHeaderAuthThunkActionCreator, setHeaderAuthThunkActionCreator} from "./auth-reducer";


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