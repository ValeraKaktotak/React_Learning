import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/profile-reducer";

// вариант настройки контейнерной компоненты без использования react-redux
//
// const MyPostsContainer = (props) => {
//
//     let state = props.store.getState();
//     let posts = state.profilePage.postData
//     let currentMessageText = state.profilePage.newMessageArea
//
//     const onAddPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }
//     const onChangePostText = (text) => {
//         props.store.dispatch(changePostTextActionCreator(text))
//     }
//     return (
//         <MyPosts onAddPost={onAddPost} onChangePostText={onChangePostText} posts={posts} currentMessageText={currentMessageText} />
//     );
// }

let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.postData,
        currentMessageText: state.profilePage.newMessageArea,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(addPostActionCreator())
        },
        onChangePostText: (text) => {
            dispatch(changePostTextActionCreator(text))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer