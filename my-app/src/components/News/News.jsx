import React, {useState} from 'react';
import style from './News.module.css';

const News = () => {
    const [count, setCount] = useState(0);
    console.log("render");
    return (
        <>
            <div className={style.news}>
                News
            </div>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(value => value +1)}>
                    Click me
                </button>
            </div>
        </>
    );
}

export default News

