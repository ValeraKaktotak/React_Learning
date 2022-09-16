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
    );
}