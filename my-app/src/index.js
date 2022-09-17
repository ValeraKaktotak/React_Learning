import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscriber} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, changePostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const render = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changePostMessage={changePostText} />
        </React.StrictMode>
    )
}
render(state)

subscriber(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
