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
    const messages = messagesData.map(m => <UserMessage message={m.message}/>);
    return(
        <div className={style.user_messages}>
            { messages }
        </div>
    );
}

export default UserMessages