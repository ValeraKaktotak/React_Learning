import style from './MyPost.module.css';

const MyPost = (props) => {
    return(
        <div className={style.my_post}>
            <img src="https://i.yapx.ru/PjNdJ.gif" alt="#"/>
            <p className={style.message}>{props.message}</p>
            <div>Likes: {props.likes}</div>
        </div>
    );
}

export default MyPost