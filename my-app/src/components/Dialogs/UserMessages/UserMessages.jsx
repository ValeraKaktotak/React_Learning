import style from './UserMessages.module.css';
import UserMessage from "./UserMessage/UserMessage";
import React from "react";
import {addMessageActionCreator, changeMessageTextActionCreator} from "../../../redux/state";

const UserMessages = (props) => {

    const messages = props.dialogsData.messageData.map(m => <UserMessage key={m.id} message={m.message}/>);

    let newMassageText = props.dialogsData.newMessageDataArea;

    let messageData = React.createRef();

    const changeText = () => {
        let text = messageData.current.value;
        props.dispatch(changeMessageTextActionCreator(text));
    }
    const sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    return (
        <div className={style.user_messages}>
            {messages}
            <div>
                <textarea ref={messageData} value={newMassageText} onChange={changeText}/>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default UserMessages