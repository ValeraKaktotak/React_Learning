import style from './Users.module.css';
import Users from "./Users";
import {connect} from "react-redux";
import {
    addUserCountActionCreator,
    addUsersActionCreator, changeUsersCurrentPageActionCreator,
    followActionCreator, followingProcessActionCreator, preloaderActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";
import React from "react";
import defaultAvatar from "../../assets/images/avatar.jpg";
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {FollowAPI, UsersAPI} from "../../api/api";


class UsersContainer extends React.Component{

    componentDidMount() {
    this.props.preloaderActionCreator(true);
    UsersAPI.getUsers(this.props.usersCurrentPage, this.props.usersCountOnPage)
        .then(response=>{
            this.props.addUsers(response.items);
            this.props.addUserCount(response.totalCount);
            this.props.preloaderActionCreator(false);
        })
    }

    buildUsers = () => {
        return(
            this.props.users.map(u =>
                <div className={style.user} key={u.id}>
                    <div className={style.left}>
                        <NavLink to={`/profile/${u.id}`}>
                            <img className={style.avatar} src={u.photos.small ? u.photos.small : defaultAvatar}
                                 alt="avatar"/>
                        </NavLink>
                        {u.followed?
                            <button disabled={this.props.followingProgress.some(id => id === u.id)} onClick={()=>
                                {
                                    this.props.followingProcess(true, u.id);
                                    FollowAPI.unfollowUser(u.id)
                                    .then(response=>{
                                        if(response.resultCode === 0){
                                            this.props.unFollow(u.id)
                                        }
                                        this.props.followingProcess(false, u.id);
                                    })
                                }
                            }>
                                Unfollow
                            </ button>:
                            <button disabled={this.props.followingProgress.some(id => id === u.id)} onClick={()=>
                                {
                                    this.props.followingProcess(true, u.id);
                                    FollowAPI.followUser(u.id)
                                        .then(response=>{
                                        if(response.resultCode === 0){
                                            this.props.follow(u.id)
                                        }
                                        this.props.followingProcess(false, u.id);
                                    })
                                }
                            }>
                                Follow
                            </ button>
                        }
                    </div>
                    <div className={style.right}>
                        <p>{u.photos.small}</p>
                        <p>{u.name}</p>
                        <p>{u.location}</p>
                        <p>{this.props.usersCount}</p>
                    </div>
                </div>
            )
        )
    }

    changePage = (page) => {
        this.props.preloaderActionCreator(true);
        this.props.changeCurrentPage(page);
        UsersAPI.getUsers(page, this.props.usersCountOnPage)
        .then(response=>{
            this.props.addUsers(response.items);
            this.props.addUserCount(response.totalCount);
            this.props.preloaderActionCreator(false);
        })
    }

    render() {
        return(
            <>
                { this.props.isLoader?<Preloader/>: null}
                <Users usersCount={this.props.usersCount}
                       usersCurrentPage={this.props.usersCurrentPage}
                       changePage={this.changePage}
                       buildUsers={this.buildUsers}
                       usersCountOnPage={this.props.usersCountOnPage}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersCountOnPage: state.usersPage.usersCountOnPage,
        usersCount: state.usersPage.usersCount,
        usersCurrentPage: state.usersPage.usersCurrentPage,
        isLoader: state.usersPage.isLoader,
        followingProgress: state.usersPage.isFollowingProcess
    }
}
//оптимизировал эту функцию в объект ниже
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userid) => {
//             dispatch(followActionCreator(userid))
//         },
//         unFollow: (userid) => {
//             dispatch(unfollowActionCreator(userid))
//         },
//         addUsers: (users) => {
//             dispatch(addUsersActionCreator(users))
//         },
//         addUserCount: (count) => {
//             dispatch(addUserCountActionCreator(count))
//         },
//         changeCurrentPage: (page) => {
//             dispatch(changeUsersCurrentPageActionCreator(page))
//         },
//         preloaderActionCreator: (isLoader) => {
//             dispatch(preloaderActionCreator(isLoader))
//         }
//     }
// }


export default connect(mapStateToProps, {
    follow: followActionCreator,
    unFollow: unfollowActionCreator,
    addUsers: addUsersActionCreator,
    addUserCount: addUserCountActionCreator,
    changeCurrentPage: changeUsersCurrentPageActionCreator,
    preloaderActionCreator: preloaderActionCreator,
    followingProcess:followingProcessActionCreator
})(UsersContainer)
