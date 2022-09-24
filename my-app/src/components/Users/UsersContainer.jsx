import Users from "./Users";
import {connect} from "react-redux";
import {addUsersActionCreator, followActionCreator, unfollowActionCreator} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.users
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
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer