import style from './Profile.module.css';
import MyProfile from "./MyProfile/MyProfile";
import MyPostsContainer from "./Myposts/MyPostsContainer";

const Profile = (props) => {
    return (
        <article className={style.profile}>
            <MyProfile/>
            <MyPostsContainer store={props.store} />
        </article>);
}

export default Profile