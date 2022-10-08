import React from 'react';
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {getUserThunkActionCreator} from "../../../redux/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

class MyProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId){
            userId = 26091;
        }
        this.props.getUserThunkActionCreator(userId)
    }

    componentDidUpdate(prevProps) {
        let userId = this.props.router.params.userId
        if (prevProps.router.params.userId !== userId) {
            let userId = 26091
            this.props.getUserThunkActionCreator(userId)
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

export default connect(mapStateToProps, {getUserThunkActionCreator} )(withRouter(MyProfileContainer))
