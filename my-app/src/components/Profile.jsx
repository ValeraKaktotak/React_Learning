import style from './Profile.module.css';
const Profile = () => {
    return (
        <article className={style.profile}>
            <img src="https://lifehacker.ru/wp-content/uploads/2017/03/bluesky_1488891825.jpg" alt="sky"/>
            <div className={style.user_block}>
                <img
                    src="https://w7.pngwing.com/pngs/409/621/png-transparent-computer-icons-avatar-male-user-profile-others-logo-monochrome-silhouette.png"
                    alt="user_photo"/>
                <div className={style.user_description}>
                    <h3>User name</h3>
                    <h4>Date of birth: 14.10.1988</h4>
                    <h4>City: Kharkiv</h4>
                    <h4>Education: KNURE'10</h4>
                    <h4>Web site: nope</h4>
                    <h3>About me</h3>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid amet aspernatur assumenda consequatur delectus, dolor ea eaque enim fugit illo incidunt itaque laborum nam, repellat similique sint! In, tempore.</span><span>Asperiores, consequatur dolor est et id officiis quis? A amet, animi aperiam consequatur cupiditate, excepturi fugiat maxime minus modi obcaecati odio odit pariatur quae quibusdam quos, rem reprehenderit saepe. Velit?</span><span>Deleniti, ducimus enim eos excepturi incidunt maxime nostrum odio officia officiis, optio quasi rem rerum tempore voluptate voluptatum. Consequuntur, cumque, error? Aliquid autem dolor eveniet minima nihil optio quaerat quasi!</span>
                    </p>
                </div>
            </div>
            <div className={style.my_posts}>
                <h3>My posts</h3>

            </div>
        </article>);
}

export default Profile