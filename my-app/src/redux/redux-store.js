import {combineReducers, legacy_createStore as createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

const reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    loginAuth: authReducer
})

const store = createStore(reducers);

window.store = store;

export default store