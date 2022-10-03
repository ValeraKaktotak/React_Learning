import './App.css';
import {Route, Routes} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <div className="App_wrapper">
            <HeaderContainer/>
            <Sidebar/>
            <div className="App_wrapper_content">
                <Routes>
                    {/*<Route path="/profile" element={<Profile/>}/>*/}
                    {/*<Route path="/profile/:userId" element={<Profile/>}/>*/}
                    <Route path="profile" element={<Profile />}>
                        <Route path=":userId" element={<Profile />} />
                    </Route>

                    <Route path="/login" element={<Login/>}/>
                    <Route path="/dialogs" element={<Dialogs/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App
