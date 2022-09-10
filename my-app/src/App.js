import './App.css';

const App = () => {
    return (
        <div className="App-wrapper">
            <header>
                <img src="https://assets.turbologo.ru/blog/ru/2019/04/18165419/oracle.png" alt="sky"/>
            </header>
            <nav>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </nav>
            <article>
                <img src="https://lifehacker.ru/wp-content/uploads/2017/03/bluesky_1488891825.jpg" alt="sky"/>
                <div className="user-block">
                    <img src="https://w7.pngwing.com/pngs/409/621/png-transparent-computer-icons-avatar-male-user-profile-others-logo-monochrome-silhouette.png" alt="user_photo"/>
                    <div className="user-description">
                        <h3>User name</h3>
                        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid amet aspernatur assumenda consequatur delectus, dolor ea eaque enim fugit illo incidunt itaque laborum nam, repellat similique sint! In, tempore.</span><span>Asperiores, consequatur dolor est et id officiis quis? A amet, animi aperiam consequatur cupiditate, excepturi fugiat maxime minus modi obcaecati odio odit pariatur quae quibusdam quos, rem reprehenderit saepe. Velit?</span><span>Deleniti, ducimus enim eos excepturi incidunt maxime nostrum odio officia officiis, optio quasi rem rerum tempore voluptate voluptatum. Consequuntur, cumque, error? Aliquid autem dolor eveniet minima nihil optio quaerat quasi!</span></p>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default App;
