const followActionCreatorConst = 'FOLLOW';
const unfollowActionCreatorConst = 'UNFOLLOW';
const addUsersActionCreatorConst = 'ADD-USERS';
const addUsersCountActionCreatorConst = 'ADD-USERS-COUNT';
const changeUsersCurrentPageActionCreatorConst = 'CHANGE-CURRENT-PAGE';
const preloaderActionCreatorConst = 'PRELOADER';
const followingProcessActionCreatorConst = 'TOGGLE_IS_FOLLOWING';

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
export const preloaderActionCreator = (isLoader) => {
    return {type: preloaderActionCreatorConst, isLoader}
}
export const followingProcessActionCreator = (toggleStatus, userId) => {
    return {type: followingProcessActionCreatorConst, toggleStatus, userId}
}
//передаем часть данных связанных с данным редьюсером для первого рендера(создание state)
const init = {
    users: [],
    usersCountOnPage: 10,
    usersCurrentPage: 1,
    usersCount: 0,
    isLoader: false,
    isFollowingProcess: []
}
const usersReducer = (state = init, action) => {
    switch (action.type) {
        case followActionCreatorConst:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case unfollowActionCreatorConst:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case addUsersActionCreatorConst:
            return {
                ...state, users: [...action.users]
            }
        case addUsersCountActionCreatorConst:
            return {
                ...state, usersCount: action.count
            }
        case changeUsersCurrentPageActionCreatorConst:
            return {
                ...state, usersCurrentPage: action.page
            }
        case preloaderActionCreatorConst:
            return {
                ...state, isLoader: action.isLoader
            }
        case followingProcessActionCreatorConst:
            return {
                ...state,
                isFollowingProcess: action.toggleStatus
                    ?[...state.isFollowingProcess, action.userId ]
                    :[...state.isFollowingProcess.filter(id=> id !== action.userId)]
            }
    }
    return state
}
export default usersReducer