import style from './Dialogs.module.css';
import UserMessagesContainer from "./UserMessages/UserMessagesContainer";
import UserDialogsContainer from "./UserDialogs/UserDialogsContainer";

const Dialogs = (props) => {
    return(
        <div className={style.dialogs}>
            <UserDialogsContainer store={props.store}  />
            <UserMessagesContainer store={props.store} />
        </div>
    );
}

export default Dialogs