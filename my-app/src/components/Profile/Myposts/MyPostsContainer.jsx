import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {

    let state = props.store.getState();
    let posts = state.profilePage.postData
    let currentMessageText = state.profilePage.newMessageArea

    const onAddPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const onChangePostText = (text) => {
        props.store.dispatch(changePostTextActionCreator(text))
    }
    return (
        <MyPosts onAddPost={onAddPost} onChangePostText={onChangePostText} posts={posts} currentMessageText={currentMessageText} />
    );
}

export default MyPostsContainer