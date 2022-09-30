const followActionCreatorConst = 'FOLLOW';
const unfollowActionCreatorConst = 'UNFOLLOW';
const addUsersActionCreatorConst = 'ADD-USERS';
const addUsersCountActionCreatorConst = 'ADD-USERS-COUNT';
const changeUsersCurrentPageActionCreatorConst = 'CHANGE-CURRENT-PAGE';

export const followActionCreator = (userId) => {
    return {type: followActionCreatorConst, userId}
}
export const unfollowActionCreator = (userId) => {
    return {type: unfollowActionCreatorConst, userId}
}
export const addUsersActionCreator = (users) => {
    return {type: addUsersActionCreatorConst, users}
}
export const addUserCountActionCreator = (count) => {
    return {type: addUsersCountActionCreatorConst, count}
}
export const changeUsersCurrentPageActionCreator = (page) => {
    return {type: changeUsersCurrentPageActionCreatorConst, page}
}
//передаем часть данных связанных с данным редьюсером для первого рендера(создание state)
const init = {
    users: [],
    usersCountOnPage: 10,
    usersCurrentPage: 1,
    usersCount: 0
}
const usersReducer = (state = init, action) => {
    if (action.type === followActionCreatorConst) {
        return{
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId){
                    return {...u, followed: true}
                }
                return u
            })
        }
    } else if (action.type === unfollowActionCreatorConst) {
        return{
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId){
                    return{...u, followed: false }
                }
                return u
            })
        }
    } else if(action.type === addUsersActionCreatorConst){
        return {
            ...state, users: [...action.users]
        }
    } else if(action.type === addUsersCountActionCreatorConst){
        return {
            ...state, usersCount: action.count
        }
    } else if(action.type === changeUsersCurrentPageActionCreatorConst){
        return {
            ...state, usersCurrentPage: action.page
        }
    }
    return state
}
export default usersReducer