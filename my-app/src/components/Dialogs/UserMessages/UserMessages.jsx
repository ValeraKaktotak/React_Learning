import style from './UserMessages.module.css';
import UserMessage from "./UserMessage/UserMessage";

const UserMessages = () => {
    return(
        <div className={style.user_messages}>
            <UserMessage message="Hi:)"/>
            <UserMessage message="hi hi hi:)"/>
            <UserMessage message="Hello!)))"/>
            <UserMessage message="How are you?)"/>
            <UserMessage message="You are ok?)"/>
        </div>
    );
}

export default UserMessages