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

class Users extends React.Component{

    constructor(props) {
        super(props);
        this.showUsers();
    }

    showUsers = () => {
        if(this.props.users.length == 0){
            axios.get("https://retoolapi.dev/kEIKYP/users").then(response=>{
                this.props.addUsers(response.data)
            })
        }
    }

    buildUsers = () => {
        return(
            this.props.users.map(u =>
                <div className={style.user} key={u.id}>
                    <div className={style.left}>
                        <img className={style.avatar} src={u.avatar? u.avatar: defaultAvatar} alt="avatar"/>
                        {u.followStatus?
                            <button onClick={()=>{this.props.unFollow(u.id)}}>Unfollow</ button>:
                            <button onClick={()=>{this.props.follow(u.id)}}>Follow</ button>
                        }
                    </div>
                    <div className={style.right}>
                        <p>{u.fullName}</p>
                        <p>{u.location}</p>
                        <p>{u.message}</p>
                    </div>
                </div>
            )
        )
    }

    render() {
        return(
            <div className={style.users}>
                {
                    this.buildUsers()
                }
            </div>
        );
    }
}

export default Users