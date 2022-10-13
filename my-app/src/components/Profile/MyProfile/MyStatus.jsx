import React from "react";

class MyStatus extends React.Component {
    state = {
        editMode: false
    }
    render() {
        return (
            <>
                {!this.state.editMode?
                    <div>
                        <span>{this.props.value}</span>
                    </div>:
                    <div>
                        <input type="text" value={this.props.value}/>
                    </div>
                }
            </>
        )
    }
}

export default MyStatus