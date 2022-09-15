import style from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";
import MyProfile from "./MyProfile/MyProfile";

const Profile = (props) => {
    return (
        <article className={style.profile}>
            <MyProfile/>
            <MyPosts postsData={props.postsData}/>
        </article>);
}

export default Profile