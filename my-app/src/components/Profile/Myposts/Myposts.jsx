import style from './Myposts.module.css';
import Mypost from "./Post/Mypost";

const Myposts = () => {
    return(
        <div className={style.my_posts}>
            <div className={style.add_data}>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <h3>My posts</h3>
            <Mypost message = "Hi, it's my first post" likes="21" />
            <Mypost message = "Hi, it's my second post" likes="11"/>
            <Mypost message = "Hi, it's my third post" likes="15"/>
        </div>
    );
}

export default Myposts