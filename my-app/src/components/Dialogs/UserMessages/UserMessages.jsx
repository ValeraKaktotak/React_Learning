import style from './UserMessages.module.css';
import UserMessage from "./UserMessage/UserMessage";

const UserMessages = (props) => {

    const messages = props.messagesData.map(m => <UserMessage key={m.id} message={m.message}/>);
    return(
        <div className={style.user_messages}>
            { messages }
        </div>
    );
}

export default UserMessages