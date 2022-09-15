import style from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={style.friends}>
            <img src={props.avatar} alt="friend"/>
        </div>
    );
}

export default Friends