import style from './Dialogs.module.css';
import UserDialogs from "./UserDialogs/UserDialogs";
import UserMessages from "./UserMessages/UserMessages";

const Dialogs = () => {
    return(
        <div className={style.dialogs}>
            <UserDialogs/>
            <UserMessages/>
        </div>
    );
}

export default Dialogs