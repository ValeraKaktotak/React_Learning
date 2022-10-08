import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setHeaderAuthThunkActionCreator} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.authUser()
    }

    render(){
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return{
        auth: state.loginAuth.isLogged,
        loginName: state.loginAuth.login,
        userId: state.loginAuth.id
    }
}

export default connect (mapStateToProps, {authUser:setHeaderAuthThunkActionCreator})(HeaderContainer)


//follow: (userid) => {
//  dispatch(followActionCreator(userid))
//}