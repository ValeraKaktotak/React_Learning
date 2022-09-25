import style from './Users.module.css';
import React from "react";

const userData = [
    {
        id: 1,
        message: 'Hi, i am a Boss!',
        fullName: 'Valery I.',
        avatar: 'https://meragor.com/files/styles//ava_800_800_wm/avto-bmv_bmw-fon-transport-41424.jpg',
        followStatus: true,
        place: {
            country: 'Ukraine',
            city: 'Kharkiv'
        }

    },
    {
        id: 2,
        message: 'Hi, i am a Boss too!',
        fullName: 'Anton S.',
        avatar: 'https://meragor.com/files/styles//ava_800_800_wm/avto-bmv_bmw-fon-transport-41424.jpg',
        followStatus: false,
        place: {
            country: 'Ukraine',
            city: 'Kharkiv'
        }

    },
    {
        id: 3,
        message: 'Hi, i am a Boss too!',
        fullName: 'Dmitry C.',
        avatar: 'https://meragor.com/files/styles//ava_800_800_wm/avto-bmv_bmw-fon-transport-41424.jpg',
        followStatus: true,
        place: {
            country: 'Ukraine',
            city: 'Kharkiv'
        }

    },
    {
        id: 4,
        message: 'Hi, i am a Boss too!',
        fullName: 'Sasha M.',
        avatar: 'https://meragor.com/files/styles//ava_800_800_wm/avto-bmv_bmw-fon-transport-41424.jpg',
        followStatus: false,
        place: {
            country: 'Ukraine',
            city: 'Kharkiv'
        }

    },
]

const Users = (props) => {
    if(props.users.length === 0){
        props.addUsers(userData)
    }

    const users = props.users.map(u =>
        <div className={style.user} key={u.id}>
            <div className={style.left}>
                <img className={style.avatar} src={u.avatar} alt="avatar"/>
                {u.followStatus?
                    <button onClick={()=>{props.unFollow(u.id)}}>Unfollow</ button>:
                    <button onClick={()=>{props.follow(u.id)}}>Follow</ button>
                }
            </div>
            <div className={style.right}>
                <p>{u.fullName}</p>
                <p>{u.place.country} {u.place.city}</p>
                <p>{u.message}</p>
            </div>
        </div>
    );

    return(
        <div className={style.users}>
            {users}
        </div>
    );
}

export default Users