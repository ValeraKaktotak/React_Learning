import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/profile-reducer";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

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

/*
Объединил HOCs в функции compose
let withAuth = withAuthRedirect(MyPosts)
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuth)
 */


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(MyPosts)