import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthActionCreator} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
            headers:{
                'API-KEY':'a4f8c407-514e-498b-9290-450a3d80d2b0'
            },
            withCredentials: true
        }).then(response=>{
            let{id, email, login} = response.data.data
            this.props.setAuthActionCreator(id, email, login)
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