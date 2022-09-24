import style from './Users.module.css';

const Users = (props) => {
    const users = props.users.map(u => {

    });

    return(
        <div className={style.users}>
            Users
        </div>
    );
}

export default Users