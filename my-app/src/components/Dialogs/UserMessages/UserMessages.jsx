import style from './UserMessages.module.css';

const UserMessages = () => {
    return(
        <div className={style.user_messages}>
            <div className={style.user_message}>
                hi:)
            </div>
            <div className={style.user_message}>
                hi hi hi:)
            </div>
            <div className={style.user_message}>
                Hello!)))
            </div>
            <div className={style.user_message}>
                How are you?)
            </div>
            <div className={style.user_message}>
                You are ok?)
            </div>
        </div>
    );
}

export default UserMessages