import {AuthAPI} from "../api/api";

const setAuthActionCreatorConst = 'SET-LOGIN-AUTH';

// Action creators
export const setAuthActionCreator = (id, email, login) => {
    return {
        type: setAuthActionCreatorConst,
        UserData: {
            id, email, login
        }
    }
}

// thunk action creators
export const setHeaderAuthThunkActionCreator = (id, email, login) => {
    return (dispatch) => {
        AuthAPI.authMe()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data;
                    dispatch(setAuthActionCreator(id, email, login))
                }
            })
    }
}

//передаем часть данных связанных с данным редьюсером для первого рендера(создание state)
const init = {
    id: null,
    email: null,
    login: null,
    isLogged: false
}
const authReducer = (state = init, action) => {
    switch (action.type) {
        case setAuthActionCreatorConst:
            return {
                ...state,
                ...action.UserData,
                isLogged: true
            }
    }
    return state
}

export default authReducer