import style from './Users.module.css';
import Users from "./Users";
import {connect} from "react-redux";
import {
    addUserCountActionCreator,
    addUsersActionCreator, changeUsersCurrentPageActionCreator,
    followActionCreator, preloaderActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";
import React from "react";
import defaultAvatar from "../../assets/images/avatar.jpg";
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {FollowAPI, UsersAPI} from "../../api/api";


class UsersContainer extends React.Component{

    componentDidMount() {
        if(this.props.users.length === 0){
            this.props.preloaderActionCreator(true);
            UsersAPI.getUsers(this.props.usersCurrentPage, this.props.usersCountOnPage)
            .then(response=>{
                this.props.preloaderActionCreator(false);
                this.props.addUsers(response.items);
                this.props.addUserCount(response.totalCount);
            })
        }
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
                            <button onClick={()=>
                                {
                                    FollowAPI.unfollowUser(u.id)
                                    .then(response=>{
                                        if(response.resultCode === 0){
                                            this.props.unFollow(u.id)
                                        }
                                    })
                                }
                            }>
                                Unfollow
                            </ button>:
                            <button onClick={()=>
                                {
                                    FollowAPI.followUser(u.id)
                                        .then(response=>{
                                        if(response.resultCode === 0){
                                            this.props.follow(u.id)
                                        }
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
            this.props.preloaderActionCreator(false);
            this.props.addUsers(response.items);
            this.props.addUserCount(response.totalCount);
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
        isLoader: state.usersPage.isLoader
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
    preloaderActionCreator: preloaderActionCreator
})(UsersContainer)
