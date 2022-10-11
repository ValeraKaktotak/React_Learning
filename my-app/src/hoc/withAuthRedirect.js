import {Navigate} from "react-router-dom";
import React from "react";

const withAuthRedirect = (Component) => {
    const withAuthRedirectContainer = (props) => {
        if(!props.isAuth){
            return <Navigate to="/login" />
        }
        return (
            <Component {...props}/>
        )
    }
    return withAuthRedirectContainer
}

export default withAuthRedirect