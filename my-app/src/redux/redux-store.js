import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import loginReducer from "./login-reducer";
import thunkMiddleWear from "redux-thunk"
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    loginAuth: authReducer,
    loginPage: loginReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWear));

window.store = store;

export default store