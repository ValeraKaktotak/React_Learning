import style from './Sidebar.module.css';
const Sidebar = () => {
    return (
        <nav className={style.sidebar}>
            <ul>
                <li><a href="my-app/src/components/Sidebar/Sidebar#1">Profile</a></li>
                <li><a href="my-app/src/components/Sidebar/Sidebar#1">Messages</a></li>
                <li><a href="my-app/src/components/Sidebar/Sidebar#1">News</a></li>
                <li><a href="my-app/src/components/Sidebar/Sidebar#1">Music</a></li>
                <li><a href="my-app/src/components/Sidebar/Sidebar#1">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Sidebar