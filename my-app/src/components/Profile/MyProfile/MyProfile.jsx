import React from 'react';
import style from './MyProfile.module.css';
import Preloader from "../../Preloader/Preloader";
import defaultAvatar from "../../../assets/images/avatar.jpg";
import MyStatus from "./MyStatus";

// вместо проверки нижк можно использовать PureComponent там аналогичная проверка защита внутри
class MyProfile extends React.PureComponent {

    //этот метод тут в качестве примера, проверка на ненужные рендеры
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return nextProps !== this.props || nextState !== this.state
    // }

    render() {
        if (!this.props.profile) {
            return (
                <Preloader/>
            )
        } else {
            return (
                <div className={style.MyProfile}>
                    <div className={style.user_block}>
                        <img
                            src={!this.props.profile.photos.small ? defaultAvatar : this.props.profile.photos.small}
                            alt="user_photo"/>
                        <div className={style.user_description}>
                            <MyStatus value={this.props.userStatus} setUserStatus={this.props.setUserStatus}/>
                            <h3>{this.props.profile.fullName}</h3>
                            <h4>{this.props.profile.aboutMe}</h4>
                            <h4>Date of birth: 14.10.1988</h4>
                            <h4>City: Kharkiv</h4>
                            <h4>Education: KNURE'10</h4>
                            <h4>Web site: nope</h4>
                            <h3>About me</h3>
                            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid amet aspernatur assumenda consequatur delectus, dolor ea eaque enim fugit illo incidunt itaque laborum nam, repellat similique sint! In, tempore.</span><span>Asperiores, consequatur dolor est et id officiis quis? A amet, animi aperiam consequatur cupiditate, excepturi fugiat maxime minus modi obcaecati odio odit pariatur quae quibusdam quos, rem reprehenderit saepe. Velit?</span><span>Deleniti, ducimus enim eos excepturi incidunt maxime nostrum odio officia officiis, optio quasi rem rerum tempore voluptate voluptatum. Consequuntur, cumque, error? Aliquid autem dolor eveniet minima nihil optio quaerat quasi!</span>
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default MyProfile