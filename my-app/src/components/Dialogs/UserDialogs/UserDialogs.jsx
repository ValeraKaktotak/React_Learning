import style from './UserDialogs.module.css'
import {NavLink} from "react-router-dom";

const UserDialogs = () => {
    return(
        <div className={style.user_dialogs}>
            <div className={style.user_dialog}>
                <NavLink to="/dialogs/1">Valera</NavLink>
            </div>
            <div className={style.user_dialog}>
                <NavLink to="/dialogs/2">Dima</NavLink>
            </div>
            <div className={style.user_dialog}>
                <NavLink to="/dialogs/3">Sveta</NavLink>
            </div>
            <div className={style.user_dialog}>
                <NavLink to="/dialogs/4">Marina</NavLink>
            </div>
            <div className={style.user_dialog}>
                <NavLink to="/dialogs/5">Lena</NavLink>
            </div>
        </div>
    );
}

export default UserDialogs