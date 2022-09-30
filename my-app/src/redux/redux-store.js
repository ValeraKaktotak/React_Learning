import {combineReducers, legacy_createStore as createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

const store = createStore(reducers);

window.store = store;
export default store