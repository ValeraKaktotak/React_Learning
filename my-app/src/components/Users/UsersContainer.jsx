import Users from "./Users";
import {connect} from "react-redux";
import {
    addUserCountActionCreator,
    addUsersActionCreator, changeUsersCurrentPageActionCreator,
    followActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersCountOnPage: state.usersPage.usersCountOnPage,
        usersCount: state.usersPage.usersCount,
        usersCurrentPage: state.usersPage.usersCurrentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userid) => {
            dispatch(followActionCreator(userid))
        },
        unFollow: (userid) => {
            dispatch(unfollowActionCreator(userid))
        },
        addUsers: (users) => {
            dispatch(addUsersActionCreator(users))
        },
        addUserCount: (count) => {
            dispatch(addUserCountActionCreator(count))
        },
        changeCurrentPage: (page) => {
            dispatch(changeUsersCurrentPageActionCreator(page))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer