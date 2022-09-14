import style from './UserMessages.module.css';
import UserMessage from "./UserMessage/UserMessage";

const UserMessages = () => {
    const messagesData = [
        {id: '1', message: 'Hi:)'},
        {id: '2', message: 'hi hi hi:)'},
        {id: '3', message: 'Hello!)))'},
        {id: '4', message: 'How are you?)'},
        {id: '5', message: 'Are you ok?'},
    ]
    return(
        <div className={style.user_messages}>
            <UserMessage message={messagesData[0].message}/>
            <UserMessage message={messagesData[1].message}/>
            <UserMessage message={messagesData[2].message}/>
            <UserMessage message={messagesData[3].message}/>
            <UserMessage message={messagesData[4].message}/>
        </div>
    );
}

export default UserMessages