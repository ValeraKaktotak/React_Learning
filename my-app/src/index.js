import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                {/*<App state={state} store={store} dispatch={store.dispatch.bind(store)}/>*/}
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
