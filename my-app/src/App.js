import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div className="App_wrapper">
            <Header/>
            <Sidebar/>
            <Profile/>
        </div>
    );
}

export default App;
