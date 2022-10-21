import {AuthAPI} from "../api/api";

const initializationActionCreatorConst = 'INITIALIZATION';

// Action creators
export const initializationActionCreator = () => {
    return {
        type: initializationActionCreatorConst
    }
}

// thunk action creators
export const initializationThunkActionCreator = () => {
    return (dispatch) => {
        AuthAPI.authMe()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(initializationActionCreator())
                }
            })
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