import React from 'react';
import UserDialogs from "./UserDialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";

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

let withAuth = withAuthRedirect(UserDialogs)

const UserDialogsContainer = connect(mapStateToProps)(withAuth);

export default UserDialogsContainer