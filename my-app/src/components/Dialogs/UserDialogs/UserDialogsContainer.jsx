import UserDialogs from "./UserDialogs";

const UserDialogsContainer = (props) => {

    let state = props.store.getState()

    let dialogs = state.messagesPage.dialogData;
    return(
        <UserDialogs dialogs={dialogs}/>
    )
}

export default UserDialogsContainer