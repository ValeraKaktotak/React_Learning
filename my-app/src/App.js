import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App_wrapper">
                <Header/>
                <Sidebar friendsData={props.state.sidebar}/>
                <div className="App_wrapper_content">
                    <Routes>
                        <Route path="/" element={<Profile postsData={props.state.profilePage}
                                                          addPost={props.addPost}
                                                          changePostMessage={props.changePostMessage} />} />
                        <Route path="/profile" element={<Profile postsData={props.state.profilePage}
                                                                 addPost={props.addPost}
                                                                 changePostMessage={props.changePostMessage} />} />
                        <Route path="/dialogs" element={<Dialogs dialogsData={props.state.messagesPage} />} />
                        <Route path="/news" element={<News/>} />
                        <Route path="/music" element={<Music/>} />
                        <Route path="/settings" element={<Settings/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
