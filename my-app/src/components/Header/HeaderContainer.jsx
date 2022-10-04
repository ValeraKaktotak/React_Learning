import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthActionCreator} from "../../redux/auth-reducer";
import {AuthAPI} from "../../api/api";

class HeaderContainer extends React.Component{
    componentDidMount() {
        AuthAPI.authMe()
        .then(response=>{
            if(response.resultCode === 0){
                let{id, email, login} = response.data;
                this.props.setAuthActionCreator(id, email, login)
            }
        })
    }

    render(){
        return (
            <Header props={this.props} />
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

export default connect (mapStateToProps, {setAuthActionCreator})(HeaderContainer)