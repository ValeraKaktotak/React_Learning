import style from './UserDialogs.module.css'
import UserDialog from "./UserDialog/UserDialog";

const UserDialogs = () => {
    return(
        <div className={style.user_dialogs}>
            <UserDialog name="Valera" id="1"/>
            <UserDialog name="Dima" id="2"/>
            <UserDialog name="Sveta" id="3"/>
            <UserDialog name="Marina" id="4"/>
            <UserDialog name="Lena" id="5"/>
        </div>
    );
}

export default UserDialogs