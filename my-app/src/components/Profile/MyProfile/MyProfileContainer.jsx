import React from 'react';
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {
    getUserStatusThunkActionCreator,
    getUserThunkActionCreator,
    setUserStatusThunkActionCreator
} from "../../../redux/profile-reducer";
import withRouter from "../../../hoc/withRouter";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {Navigate} from "react-router-dom";

class MyProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.router.params.userId;

        if(!userId){
            if(!this.props.isAuth){
                return (
                    <Navigate to="/login" />
                )
            }
            userId = this.props.loginId
        }
        this.props.getUserStatus(userId)
        this.props.getUser(userId)
    }

    componentDidUpdate(prevProps) {
        let userId = this.props.router.params.userId

        if (userId !== prevProps.router.params.userId) {
            if(!userId){
                userId = this.props.loginId
            }
            this.props.getUserStatus(userId)
            this.props.getUser(userId)
        }
    }

    render() {
        return (
            <MyProfile profile={this.props.profile} userStatus={this.props.userStatus} setUserStatus={this.props.setUserStatus} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        userStatus: state.profilePage.userStatus
    }
}


// //Объединил HOCs в функции compose
// //для react v6 специальная функция обвертка для HOC withRouter.
// let withRouterComponent = withRouter(MyProfileContainer)
//
// //HOC для проверки залогинен ли пользователь
// let withAuth = withAuthRedirect(withRouterComponent)
//
// export default connect(mapStateToProps, {getUser:getUserThunkActionCreator,
//     getUserStatus: getUserStatusThunkActionCreator,
//     setUserStatus: setUserStatusThunkActionCreator} )(withAuth)


export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps,
        {
            getUser: getUserThunkActionCreator,
            getUserStatus: getUserStatusThunkActionCreator,
            setUserStatus: setUserStatusThunkActionCreator
        }
    )
)(MyProfileContainer)
