import UserMessages from "./UserMessages";
import {connect} from "react-redux";
import {addMessageActionCreator, changeMessageTextActionCreator} from "../../../redux/messages-reducer";

//старый вариант без react-redux
// const UserMessagesContainer = (props) => {
//
//     let state = props.store.getState()
//     let messages = state.messagesPage.messageData;
//     let newMessageText = state.messagesPage.newMessageDataArea;
//
//     const onChangeText = (text) => {
//         props.store.dispatch(changeMessageTextActionCreator(text));
//     }
//     const onSendMessage = () => {
//         props.store.dispatch(addMessageActionCreator());
//     }
//     return (
//         <UserMessages messages={messages}
//                       newMessageText={newMessageText}
//                       onChangeText={onChangeText}
//                       onSendMessage={onSendMessage}
//         />
//     );
// }

let mapStateToProps = (state) => {
    return{
        messages: state.messagesPage.messageData,
        newMessageText: state.messagesPage.newMessageDataArea,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onChangeText: (text) => {
            dispatch(changeMessageTextActionCreator(text))
        }
    }
}

const UserMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(UserMessages)

export default UserMessagesContainer