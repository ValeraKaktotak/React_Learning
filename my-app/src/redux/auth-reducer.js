const setAuthActionCreatorConst = 'SET-LOGIN-AUTH';

export const setAuthActionCreator = (id, email, login) => {
    return {
        type: setAuthActionCreatorConst,
        UserData: {
            id, email, login
        }
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