const followActionCreatorConst = 'FOLLOW';
const unfollowActionCreatorConst = 'UNFOLLOW';
const addUsersActionCreatorConst = 'ADD-USERS';

export const followActionCreator = (userId) => {
    return {type: followActionCreatorConst, userId}
}
export const unfollowActionCreator = (userId) => {
    return {type: unfollowActionCreatorConst, userId}
}
export const addUsersActionCreator = (users) => {
    return {type: addUsersActionCreatorConst, users}
}
//передаем часть данных связанных с данным редьюсером для первого рендера(создание state)
const init = {
    users: [
        {
            id: 1,
            message: 'Hi, i am a Boss!',
            fullName: 'Valery I.',
            avatar: 'https://meragor.com/files/styles//ava_800_800_wm/avto-bmv_bmw-fon-transport-41424.jpg',
            followStatus: true,
            place: {
                country: 'Ukraine',
                city: 'Kharkiv'
            }

        },
        {
            id: 2,
            message: 'Hi, i am a Boss too!',
            fullName: 'Anton S.',
            avatar: 'https://meragor.com/files/styles//ava_800_800_wm/avto-bmv_bmw-fon-transport-41424.jpg',
            followStatus: false,
            place: {
                country: 'Ukraine',
                city: 'Kharkiv'
            }

        },
        {
            id: 3,
            message: 'Hi, i am a Boss too!',
            fullName: 'Dmitry C.',
            avatar: 'https://meragor.com/files/styles//ava_800_800_wm/avto-bmv_bmw-fon-transport-41424.jpg',
            followStatus: true,
            place: {
                country: 'Ukraine',
                city: 'Kharkiv'
            }

        },
        {
            id: 4,
            message: 'Hi, i am a Boss too!',
            fullName: 'Sasha M.',
            avatar: 'https://meragor.com/files/styles//ava_800_800_wm/avto-bmv_bmw-fon-transport-41424.jpg',
            followStatus: false,
            place: {
                country: 'Ukraine',
                city: 'Kharkiv'
            }

        },
    ]
}
const usersReducer = (state = init, action) => {
    if (action.type === followActionCreatorConst) {
        return{
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId){
                    return {...u, followStatus: true}
                }
                return u
            })
        }
    } else if (action.type === unfollowActionCreatorConst) {
        return{
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId){
                    return{...u, followStatus: false }
                }
                return u
            })
        }
    } else if(action.type === addUsersActionCreatorConst){
        return {
            ...state,
            users: [...state.users, ...action.users]
        }
    }
    return state
}

export default usersReducer