const changePostTextActionCreatorConst = 'CHANGE-POST-TEXT';
const addPostActionCreatorConst = 'ADD-POST';

export const changePostTextActionCreator = (text) => {
    return {
        type: changePostTextActionCreatorConst,
        newText: text
    }
}
export const addPostActionCreator = () => {
    return {type: addPostActionCreatorConst}
}

const profileReducer = (state, action) =>{
    if (action.type === addPostActionCreatorConst) {
        let newPostObject = {
            id: 4,
            message: state.newMessageArea,
            likes: 0,
            avatar: 'https://meragor.com/files/styles//ava_800_800_wm/avto-bmv_bmw-fon-transport-41424.jpg'
        }
        state.postData.unshift(newPostObject);
        state.newMessageArea = '';
    } else if (action.type === changePostTextActionCreatorConst) {
        state.newMessageArea = action.newText;
    }
    return state
}

export default profileReducer