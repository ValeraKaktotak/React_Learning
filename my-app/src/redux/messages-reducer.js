const addMessageActionCreatorConst = 'ADD-MESSAGE';
const changeMessageTextActionCreatorConst = 'CHANGE-MESSAGE-TEXT';

export const changeMessageTextActionCreator = (text) => {
    return {
        type: changeMessageTextActionCreatorConst,
        newText: text
    }
}
export const addMessageActionCreator = () => {
    return {
        type: addMessageActionCreatorConst
    }
}

const messagesReducer = (state, action) =>{
    if (action.type === changeMessageTextActionCreatorConst) {
        state.newMessageDataArea = action.newText;
    } else if (action.type === addMessageActionCreatorConst) {
        let newMessageObject = {
            id: 6,
            message: state.newMessageDataArea
        }
        state.messageData.unshift(newMessageObject);
        state.newMessageDataArea = '';
    }
    return state
}

export default messagesReducer