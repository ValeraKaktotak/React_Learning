import React from "react";

class MyStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.value
    }
    activateEditMode = () => {
        this.setState({
            editMode:true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode:false
        })
        this.props.setUserStatus(this.state.status)
    }
    changeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.status !== this.state.status ){
            this.setState({
                status: this.state.status
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode?
                    <div onClick={this.activateEditMode}>
                        <span>Ваш статус: </span>
                        <br />
                        <span>{this.props.value}</span>
                    </div>:
                    <div>
                        <input autoFocus={true} type="text" value={this.state.status} onBlur={this.deActivateEditMode} onChange={this.changeStatus} />
                    </div>
                }
            </>
        )
    }
}

export default MyStatus