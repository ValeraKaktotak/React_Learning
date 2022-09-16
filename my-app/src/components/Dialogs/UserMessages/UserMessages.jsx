import style from './UserMessages.module.css';
import UserMessage from "./UserMessage/UserMessage";
import React from "react";

const UserMessages = (props) => {

    const messages = props.messagesData.map(m => <UserMessage key={m.id} message={m.message}/>);

    let messageData = React.createRef();

    const sendMessage = () => {
        let messageText = messageData.current.value;
        alert(messageText);
    }
    return (
        <div className={style.user_messages}>
            {messages}
            <div>
                <textarea ref={messageData}></textarea>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default UserMessages