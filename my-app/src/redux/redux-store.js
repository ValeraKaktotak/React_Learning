import {combineReducers, legacy_createStore as createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

const reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
})

const store = createStore(reducers);


export default store