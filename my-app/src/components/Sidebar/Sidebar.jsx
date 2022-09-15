import style from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
    const friends = props.friendsData.friends.map(f => <Friends key={f.id} avatar={f.avatar}/>)
    return (
        <nav className={style.sidebar}>
            <ul>
                <li><NavLink to="/profile" className = { navData => navData.isActive ? style.active: '' } >Profile</NavLink></li>
                <li><NavLink to="/dialogs" className = { navData => navData.isActive ? style.active: ''} >Messages</NavLink></li>
                <li><NavLink to="/news" className = { navData => navData.isActive ? style.active: ''} >News</NavLink></li>
                <li><NavLink to="/music" className = { navData => navData.isActive ? style.active: ''} >Music</NavLink></li>
                <li><NavLink to="/settings" className = { navData => navData.isActive ? style.active: ''} >Settings</NavLink></li>
            </ul>
            <h3>My friends</h3>
            <div className={style.friends_block}>
                {friends}
            </div>
        </nav>
    );
}

export default Sidebar