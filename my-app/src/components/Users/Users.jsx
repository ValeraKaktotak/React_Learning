import style from './Users.module.css';
import React from "react";
import Paginator from "../commons/paginator/Paginator";

const Users = (props) => {

    return(
        <div className={style.users}>
            <Paginator {...props}/>
            {props.buildUsers()}
        </div>
    )
}

export default Users