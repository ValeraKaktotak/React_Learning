import style from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";

const MyPosts = (props) => {
    const posts = props.posts.map(p => <MyPost key={p.id} message={p.message} likes={p.likes} avatar={p.avatar}/>);

    const addPost = () => {
        props.onAddPost()
    }
    const changePostText = (e) => {
        let text = e.currentTarget.value;
        props.onChangePostText(text)
    }
    return (
        <div className={style.my_posts}>
            <div className={style.add_data}>
                <textarea value={props.currentMessageText} onChange={changePostText} placeholder='Enter your message'/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <h3>My posts</h3>
            {posts}
        </div>
    );
}

export default MyPosts