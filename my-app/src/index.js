import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postData = [
    {id: '1', message: 'Hi, it\'s my first post', likes: 21},
    {id: '2', message: 'Hi, it\'s my second post', likes: 11},
    {id: '3', message: 'Hi, it\'s my third post', likes: 15},
]

const dialogData = [
    {id: '1', name: 'Valera'},
    {id: '2', name: 'Dima'},
    {id: '3', name: 'Sveta'},
    {id: '4', name: 'Marina'},
    {id: '5', name: 'Lena'},
]

const messageData = [
    {id: '1', message: 'Hi:)'},
    {id: '2', message: 'hi hi hi:)'},
    {id: '3', message: 'Hello!)))'},
    {id: '4', message: 'How are you?)'},
    {id: '5', message: 'Are you ok?'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postData} dialogsData={dialogData} messagesData={messageData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
