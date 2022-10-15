import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const withAuthRedirect = (Component) => {

    class withAuthRedirectContainer extends React.Component {

        componentDidUpdate(prevProps, prevState, snapshot) {
            if(!this.props.isAuth){
                return <Navigate to="/login" />
            }
        }

        render (){
            return (
                <Component {...this.props}/>
            )
        }
    }

    let mapStateToProps = (state) => {
        return {
            isAuth: state.loginAuth.isLogged
        }
    }

    return connect(mapStateToProps)(withAuthRedirectContainer)
}

export default withAuthRedirect