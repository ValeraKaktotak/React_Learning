import UserMessages from "./UserMessages";
import React from "react";
import {addMessageActionCreator, changeMessageTextActionCreator} from "../../../redux/messages-reducer";

const UserMessagesContainer = (props) => {

    let state = props.store.getState()
    let messages = state.messagesPage.messageData;
    let newMessageText = state.messagesPage.newMessageDataArea;

    const onChangeText = (text) => {
        props.store.dispatch(changeMessageTextActionCreator(text));
    }
    const onSendMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    return (
        <UserMessages messages={messages}
                      newMessageText={newMessageText}
                      onChangeText={onChangeText}
                      onSendMessage={onSendMessage}
        />
    );
}

export default UserMessagesContainer