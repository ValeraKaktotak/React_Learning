import React from 'react';
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {getUserThunkActionCreator} from "../../../redux/profile-reducer";
import withRouter from "../../../hoc/withRouter";

class MyProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId){
            userId = 26091;
        }
        this.props.getUser(userId)
    }

    componentDidUpdate(prevProps) {
        let userId = this.props.router.params.userId
        if (prevProps.router.params.userId !== userId) {
            let userId = 26091
            this.props.getUser(userId)
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
        profile: state.profilePage.profile,
        isAuth: state.loginAuth.isLogged,
    }
}

//для react v6 специальная функция обвертка для HOC withRouter.
let withRouterComponent = withRouter(MyProfileContainer)

export default connect(mapStateToProps, {getUser:getUserThunkActionCreator} )(withRouterComponent)
