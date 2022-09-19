import style from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";
import React from 'react';
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    const posts = props.postsData.postData.map(p => <MyPost key={p.id} message={p.message} likes={p.likes} avatar={p.avatar}/>);

    let newPostText = props.postsData.newMessageArea;
    let addPostData = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    const changePostText = () => {
        let text = addPostData.current.value;
        props.dispatch(changePostTextActionCreator(text))
    }
    return (
        <div className={style.my_posts}>
            <div className={style.add_data}>
                <textarea ref={addPostData} value={newPostText} onChange={changePostText} placeholder='Enter your message'/>
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