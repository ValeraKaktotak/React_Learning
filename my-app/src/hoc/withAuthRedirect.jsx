import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const withAuthRedirect = (Component) => {
    const withAuthRedirectContainer = (props) => {
        if(!props.isAuth){
            return <Navigate to="/login" />
        }
        return (
            <Component {...props}/>
        )
    }

    let mapStateToProps = (state) => {
        return {
            isAuth: state.loginAuth.isLogged
        }
    }

    return connect(mapStateToProps)(withAuthRedirectContainer)
}

export default withAuthRedirect