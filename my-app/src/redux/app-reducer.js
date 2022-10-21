import {AuthThunkActionCreator} from "./auth-reducer";

const initializationActionCreatorConst = 'INITIALIZATION';

// Action creators
export const initializationActionCreator = () => {
    return {
        type: initializationActionCreatorConst
    }
}

// thunk action creators
export const initializationAppThunkActionCreator = () => {
    return (dispatch) => {

        // с помощью return получили промис от axios запроса
        let authPromise = dispatch(AuthThunkActionCreator())

        // после получения промиса(после ответа сервера) запускаем наш экшен
        authPromise.then(() => {
            dispatch(initializationActionCreator())
        })

        // Если промисов много, помещаем их в массив и используем .then к массиву
        // Promise.all([promise1, promise2])
        //     .then(()=>{
        //
        //     })
    }
}

const init = {
    initialized: false
}
const appReducer = (state = init, action) => {
    switch (action.type) {
        case initializationActionCreatorConst:
            return {
                ...state,
                initialized: true
            }
    }
    return state
}

export default appReducer