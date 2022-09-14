import style from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";

const MyPosts = () => {
    const postData = [
        {id: '1', message: 'Hi, it\'s my first post', likes: 21},
        {id: '2', message: 'Hi, it\'s my second post', likes: 11},
        {id: '3', message: 'Hi, it\'s my third post', likes: 15},
    ]
    return(
        <div className={style.my_posts}>
            <div className={style.add_data}>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <h3>My posts</h3>
            <MyPost message = {postData[0].message} likes={postData[0].likes} />
            <MyPost message = {postData[1].message} likes={postData[1].likes}/>
            <MyPost message = {postData[2].message} likes={postData[2].likes}/>
        </div>
    );
}

export default MyPosts