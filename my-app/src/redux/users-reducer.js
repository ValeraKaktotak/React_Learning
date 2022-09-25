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
    users: []
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
            ...state, users: [...state.users, ...action.users]
        }
    }
    return state
}

export default usersReducer