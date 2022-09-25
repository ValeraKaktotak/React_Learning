import React from 'react';
import UserDialogs from "./UserDialogs";
import {connect} from "react-redux";

//старый вариант без react-redux
// const UserDialogsContainer = (props) => {
//
//     let state = props.store.getState()
//
//     let dialogs = state.messagesPage.dialogData;
//     return(
//         <UserDialogs dialogs={dialogs}/>
//     )
// }

let mapStateToProps = (state) => {
    return{
        dialogs: state.messagesPage.dialogData
    }
}

const UserDialogsContainer = connect(mapStateToProps)(UserDialogs);

export default UserDialogsContainer