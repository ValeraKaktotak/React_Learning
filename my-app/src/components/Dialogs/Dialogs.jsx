import style from './Dialogs.module.css';
import UserDialogs from "./UserDialogs/UserDialogs";
import UserMessagesContainer from "./UserMessages/UserMessagesContainer";

const Dialogs = (props) => {
    return(
        <div className={style.dialogs}>
            <UserDialogs dialogsData={props.dialogsData.dialogData} />
            <UserMessagesContainer store={props.store} />
        </div>
    );
}

export default Dialogs