import style from './Users.module.css';
import React from "react";
import * as axios from 'axios'
import defaultAvatar from '../../assets/images/avatar.jpg'

//Пример данных для users
const userData = [
    {
        id: 1,
        message: 'Hi, i am a Boss!',
        fullName: 'Valery I.',
        avatar: 'https://meragor.com/files/styles//ava_800_800_wm/avto-bmv_bmw-fon-transport-41424.jpg',
        followStatus: true,
        location: 'Ukraine, Kharkov'

    }
]

const Users = (props) => {

    const showUsers = () => {
        if(props.users.length === 0){
            axios.get("https://retoolapi.dev/kEIKYP/users").then(response=>{
                props.addUsers(response.data)
            })
        }
    }

    const users = props.users.map(u =>
        <div className={style.user} key={u.id}>
            <div className={style.left}>
                <img className={style.avatar} src={u.avatar? u.avatar: defaultAvatar} alt="avatar"/>
                {u.followStatus?
                    <button onClick={()=>{props.unFollow(u.id)}}>Unfollow</ button>:
                    <button onClick={()=>{props.follow(u.id)}}>Follow</ button>
                }
            </div>
            <div className={style.right}>
                <p>{u.fullName}</p>
                <p>{u.location}</p>
                <p>{u.message}</p>
            </div>
        </div>
    );

    return(
        <div className={style.users}>
            <button onClick={showUsers}>Show Users</button>
            {users}
        </div>
    );
}

export default Users