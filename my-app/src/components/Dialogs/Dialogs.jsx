import style from './Dialogs.module.css';
import UserDialogs from "./UserDialogs/UserDialogs";
import UserMessages from "./UserMessages/UserMessages";

const Dialogs = (props) => {
    return(
        <div className={style.dialogs}>
            <UserDialogs dialogsData={props.dialogsData} />
            <UserMessages messagesData={props.messagesData} />
        </div>
    );
}

export default Dialogs