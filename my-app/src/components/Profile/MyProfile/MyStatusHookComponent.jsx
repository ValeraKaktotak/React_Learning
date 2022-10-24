import React, {useState} from "react";

const MyStatusHookComponent = (props) => {

    let[editMode, setEditMode] = useState(false)
    let[statusValue, setStatusValue] = useState(props.value)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.setUserStatus(statusValue)
    }

    const changeStatus = (e) => {
        setStatusValue(e.currentTarget.value)
    }

    return (
        <>
            {!editMode?
                <div onClick={activateEditMode}>
                    <span>Ваш статус: </span>
                    <br />
                    <span>{statusValue}</span>
                </div>:
                <div>
                    <input autoFocus={true} type="text" value={statusValue} onBlur={deActivateEditMode} onChange={changeStatus}/>
                </div>
            }
        </>
    )
}

export default MyStatusHookComponent