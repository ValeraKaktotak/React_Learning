import React from 'react';
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setProfileActionCreator} from "../../../redux/profile-reducer";

class MyProfileContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`, {
            headers:{
                'API-KEY':'a4f8c407-514e-498b-9290-450a3d80d2b0'
            }
        }).then(response=>{
            this.props.setProfileActionCreator(response.data);
        })
    }
    render() {
        return (
            <MyProfile profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setProfileActionCreator} )(MyProfileContainer)