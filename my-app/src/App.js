import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="App_wrapper">
            <Header/>
            <Sidebar/>
            <div className="App_wrapper_content">
                {/*<Profile/>*/}
                <Dialogs />
            </div>
        </div>
    );
}

export default App;
