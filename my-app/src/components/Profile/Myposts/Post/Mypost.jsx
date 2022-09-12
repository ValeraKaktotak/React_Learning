import style from './Mypost.module.css';

const Mypost = (props) => {
    return(
        <div className={style.my_post}>
            <img src="https://i.yapx.ru/PjNdJ.gif" alt="#"/>
            <p className={style.message}>{props.message}</p>
            <div>Likes: {props.likes}</div>
        </div>
    );
}

export default Mypost