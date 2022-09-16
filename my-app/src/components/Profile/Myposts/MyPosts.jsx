import style from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";
import React from 'react';

const MyPosts = (props) => {
    const posts = props.postsData.map(p => <MyPost key={p.id} message={p.message} likes={p.likes} avatar={p.avatar}/>);


    let addPostData = React.createRef();

    const addPost = () => {
        let text = addPostData.current.value;
        props.addPost(text);
    }
    return (
        <div className={style.my_posts}>
            <div className={style.add_data}>
                <textarea ref={addPostData}></textarea>
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