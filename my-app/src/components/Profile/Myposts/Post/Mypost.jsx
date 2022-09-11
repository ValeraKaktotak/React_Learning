import style from './Mypost.module.css';

const Mypost = () => {
    return(
        <div className={style.my_post}>
            <img src="https://i.yapx.ru/PjNdJ.gif" alt="#"/>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto commodi cumque distinctio eius et expedita, illum, inventore maiores minus nam officiis perferendis praesentium quam quas qui quidem totam unde?</div>
        </div>
    );
}

export default Mypost