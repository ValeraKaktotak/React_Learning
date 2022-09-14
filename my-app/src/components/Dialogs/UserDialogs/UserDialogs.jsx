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
    return(
        <div className={style.user_dialogs}>
            <UserDialog name={dialogsData[0].name} id={dialogsData[0].id}/>
            <UserDialog name={dialogsData[1].name} id={dialogsData[1].id}/>
            <UserDialog name={dialogsData[2].name} id={dialogsData[2].id}/>
            <UserDialog name={dialogsData[3].name} id={dialogsData[3].id}/>
            <UserDialog name={dialogsData[4].name} id={dialogsData[4].id}/>
        </div>
    );
}

export default UserDialogs