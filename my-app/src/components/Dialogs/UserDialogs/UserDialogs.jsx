import style from './UserDialogs.module.css'
import UserDialog from "./UserDialog/UserDialog";

const UserDialogs = () => {
    const dialogsData = [
        {id: '1', name: 'Valera'},
        {id: '2', name: 'Dima'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Marina'},
        {id: '5', name: 'Lena'},
    ]
    const dialogs = dialogsData.map(d => <UserDialog name={d.name} id={d.id}/>);
    return(
        <div className={style.user_dialogs}>
            { dialogs }
        </div>
    );
}

export default UserDialogs