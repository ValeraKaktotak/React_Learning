import React from 'react';
import style from './MyProfile.module.css';
import Preloader from "../../Preloader/Preloader";
import defaultAvatar from "../../../assets/images/avatar.jpg";

const MyProfile = (props) => {
    if(!props.profile){
        return(
            <Preloader />
        )
    }else{
        return(
            <div className={style.MyProfile}>
                <img src="https://images.unian.net/photos/2015_10/thumb_files/1200_0_1445482038-9097-samaya-goryachaya-i-massivnaya-kontaktnaya-dvoynaya-zvezda-risunok-hudojnika.jpg" alt="sky"/>
                <div className={style.user_block}>
                    <img
                        src={ !props.profile.photos.small?defaultAvatar:props.profile.photos.small}
                        alt="user_photo"/>
                    <div className={style.user_description}>
                        <h3>{props.profile.fullName}</h3>
                        <h4>{props.profile.aboutMe}</h4>
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

export default MyProfile