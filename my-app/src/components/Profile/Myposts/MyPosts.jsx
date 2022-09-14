import style from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";

const MyPosts = () => {
    return(
        <div className={style.my_posts}>
            <div className={style.add_data}>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <h3>My posts</h3>
            <MyPost message = "Hi, it's my first post" likes="21" />
            <MyPost message = "Hi, it's my second post" likes="11"/>
            <MyPost message = "Hi, it's my third post" likes="15"/>
        </div>
    );
}

export default MyPosts