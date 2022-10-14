import React from "react";

class MyStatus extends React.Component {
    state = {
        editMode: false
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
                        <input autoFocus={true} type="text" value={this.props.value} onBlur={this.deActivateEditMode}/>
                    </div>
                }
            </>
        )
    }
}

export default MyStatus