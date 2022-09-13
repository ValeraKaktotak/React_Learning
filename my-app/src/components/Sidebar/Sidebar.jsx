import style from './Sidebar.module.css';
const Sidebar = () => {
    return (
        <nav className={style.sidebar}>
            <ul>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/dialogs">Messages</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/music">Music</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Sidebar