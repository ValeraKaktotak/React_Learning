import style from './UserMessages.module.css';
import UserMessage from "./UserMessage/UserMessage";
import React from "react";

const UserMessages = (props) => {

    const messages = props.messages.map(m => <UserMessage key={m.id} message={m.message}/>);

    let newMassageText = props.newMessageText;

    const changeText = (e) => {
        let text = e.currentTarget.value;
        props.onChangeText(text);
    }
    const sendMessage = () => {
        props.onSendMessage();
    }
    return (
        <div className={style.user_messages}>
            {messages}
            <div>
                <textarea value={newMassageText} onChange={changeText} placeholder='Enter your message'/>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default UserMessages