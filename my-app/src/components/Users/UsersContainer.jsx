import style from './Users.module.css';
import Users from "./Users";
import {connect} from "react-redux";
import {
    addUserCountActionCreator,
    addUsersActionCreator, changeUsersCurrentPageActionCreator,
    followActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import defaultAvatar from "../../assets/images/avatar.jpg";

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

class UsersAPI extends React.Component{

    componentDidMount() {
        if(this.props.users.length === 0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersCurrentPage}&count=${this.props.usersCountOnPage}`, {
                headers:{
                    'API-KEY':'a4f8c407-514e-498b-9290-450a3d80d2b0'
                }
            }).then(response=>{
                this.props.addUsers(response.data.items);
                this.props.addUserCount(response.data.totalCount);
            })
        }
    }

    buildUsers = () => {
        return(
            this.props.users.map(u =>
                <div className={style.user} key={u.id}>
                    <div className={style.left}>
                        <img className={style.avatar} src={u.photos.small? u.photos.small: defaultAvatar} alt="avatar"/>
                        {u.followed?
                            <button onClick={()=>{this.props.unFollow(u.id)}}>Unfollow</ button>:
                            <button onClick={()=>{this.props.follow(u.id)}}>Follow</ button>
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
        this.props.changeCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersCountOnPage}`, {
            headers:{
                'API-KEY':'a4f8c407-514e-498b-9290-450a3d80d2b0'
            }
        }).then(response=>{
            this.props.addUsers(response.data.items);
            this.props.addUserCount(response.data.totalCount);
        })
    }

    render() {
        return(
            <Users usersCount={this.props.usersCount}
                   usersCurrentPage={this.props.usersCurrentPage}
                   changePage={this.changePage}
                   buildUsers={this.buildUsers}
                   usersCountOnPage={this.props.usersCountOnPage}/>
        );
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer