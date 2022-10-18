import {ProfileAPI} from "../api/api";

//const changePostTextActionCreatorConst = 'CHANGE-POST-TEXT';
const addPostActionCreatorConst = 'ADD-POST';
const setProfileActionCreatorConst = 'SET-PROFILE';
const setUserStatusActionCreatorConst = 'SET-STATUS';

// export const changePostTextActionCreator = (text) => {
//     return {
//         type: changePostTextActionCreatorConst,
//         newText: text
//     }
// }
export const addPostActionCreator = (message) => {
    return {type: addPostActionCreatorConst, message: message.myMessage}
}
export const setProfileActionCreator = (profile) => {
    return {type: setProfileActionCreatorConst, profile}
}
export const setUserStatusActionCreator = (status) => {
    return {type: setUserStatusActionCreatorConst, status}
}

export const getUserThunkActionCreator = (userId) => {
    return (dispatch) => {
        ProfileAPI.getUser(userId)
        .then(response => {
            dispatch(setProfileActionCreator(response))
        })
    }
}
export const getUserStatusThunkActionCreator = (userId) => {
    return (dispatch) => {
        ProfileAPI.getUserStatus(userId)
        .then(response => {
            dispatch(setUserStatusActionCreator(response))
        })
    }
}

export const setUserStatusThunkActionCreator = (status) => {
    return (dispatch) => {
        ProfileAPI.setUserStatus(status)
        .then(response => {
            if(response.resultCode === 0){
                dispatch(setUserStatusActionCreator(status))
            }
        })
    }
}

//передаем часть данных связанных с данным редьюсером для первого рендера(создание state)
const init = {
    postData: [
        {
            id: 1,
            message: 'Hi, it\'s my first post',
            likes: 21,
            avatar: 'https://meragor.com/files/styles//ava_800_800_wm/avto-bmv_bmw-fon-transport-41424.jpg'
        },
        {
            id: 2,
            message: 'Hi, it\'s my second post',
            likes: 11,
            avatar: 'https://meragor.com/files/styles//ava_800_800_wm/avto-bmv_bmw-fon-transport-41424.jpg'
        },
        {
            id: 3,
            message: 'Hi, it\'s my third post',
            likes: 15,
            avatar: 'https://meragor.com/files/styles//ava_800_800_wm/avto-bmv_bmw-fon-transport-41424.jpg'
        },
    ],
    newMessageArea: '',
    profile: null,
    userStatus: ''
}
const profileReducer = (state = init, action) => {
    switch (action.type) {
        case addPostActionCreatorConst:
            let newPostObject = {
                id: 4,
                message: action.message,
                likes: 0,
                avatar: 'https://meragor.com/files/styles//ava_800_800_wm/avto-bmv_bmw-fon-transport-41424.jpg'
            }
            // let copyState = {...state};
            // copyState.postData = [...state.postData]
            // copyState.postData.unshift(newPostObject);
            // copyState.newMessageArea = '';
            // return copyState
            return {
                ...state,
                postData: [newPostObject, ...state.postData]
            }
        // case changePostTextActionCreatorConst: // let copyState = {...state};
        //     // copyState.newMessageArea = action.newText;
        //     // return copyState
        //     return {
        //         ...state,
        //         newMessageArea: action.newText
        //     }
        case setProfileActionCreatorConst:
            return {
                ...state,
                profile: action.profile
            }
        case setUserStatusActionCreatorConst:
            return {
                ...state,
                userStatus: action.status
            }
    }
    return state
}

export default profileReducer