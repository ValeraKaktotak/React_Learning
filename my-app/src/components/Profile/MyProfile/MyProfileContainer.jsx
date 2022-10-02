import React from 'react';
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setProfileActionCreator} from "../../../redux/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

class MyProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId){
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
            headers:{
                'API-KEY':'a4f8c407-514e-498b-9290-450a3d80d2b0'
            }
        }).then(response=>{
            this.props.setProfileActionCreator(response.data);
        })
    }

    componentDidUpdate(prevProps) {
        let userId = this.props.router.params.userId
        if (prevProps.router.params.userId !== userId) {
            let userId = 2
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
                headers:{
                    'API-KEY':'a4f8c407-514e-498b-9290-450a3d80d2b0'
                }
            }).then(response => {
                    this.props.setProfileActionCreator(response.data);
                });
        }
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

//для react v6 специальная функция обвертка для HOC withRouter. Вверху импорт методов
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {setProfileActionCreator} )(withRouter(MyProfileContainer))
