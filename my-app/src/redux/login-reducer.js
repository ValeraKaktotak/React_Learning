import {LoginApi} from "../api/api";


const confirmLoginActionCreatorConst = 'CONFIRM-LOGIN';

export const confirmLoginActionCreator = (loginData) => {
    return {
        type: confirmLoginActionCreatorConst,
        loginData
    }
}

export const loginUserThunkActionCreator = (loginData) => {
    return (dispatch) => {
        let {email, password, rememberMe} = loginData;
        LoginApi.login(email, password, rememberMe)
        .then(response => {
            if(response.resultCode === 0){
                dispatch(confirmLoginActionCreator(loginData))
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