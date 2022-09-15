import style from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";

const MyPosts = (props) => {
    const posts = props.postsData.map(p => <MyPost key={p.id} message={p.message} likes={p.likes}/>)
    return (
        <div className={style.my_posts}>
            <div className={style.add_data}>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <h3>My posts</h3>
            {posts}
        </div>
    );
}

export default MyPosts