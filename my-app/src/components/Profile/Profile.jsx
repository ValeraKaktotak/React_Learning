import style from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";
import MyProfile from "./MyProfile/MyProfile";

const Profile = () => {
    return (
        <article className={style.profile}>
            <MyProfile/>
            <MyPosts/>
        </article>);
}

export default Profile