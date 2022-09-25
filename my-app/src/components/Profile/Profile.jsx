import React from 'react';
import style from './Profile.module.css';
import MyProfile from "./MyProfile/MyProfile";
import MyPostsContainer from "./Myposts/MyPostsContainer";

const Profile = () => {
    return (
        <article className={style.profile}>
            <MyProfile/>
            {/*<MyPostsContainer store={props.store} />*/}
            <MyPostsContainer />
        </article>);
}

export default Profile