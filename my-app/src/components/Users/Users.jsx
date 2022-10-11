import style from './Users.module.css';
import React from "react";

const Users = (props) => {
    //пагинация
    const pages = Math.ceil(props.usersCount / props.usersCountOnPage);
    let pagesArray = [];

    if(pages > 10) {
        if(props.usersCurrentPage > 5) {
            for (let i = props.usersCurrentPage-4; i <= props.usersCurrentPage+5; i++) {
                pagesArray.push(i)
                if(i === pages) break
            }
        }
        else {
            for (let i = 1; i <= 10; i++) {
                pagesArray.push(i)
                if(i === pages) break
            }
        }
    }  else {
        for (let i = 1; i <= pages; i++) {
            pagesArray.push(i)
        }
    }


    return(
        <div className={style.users}>
            <div>
                {
                    pagesArray.map( (page, index) => {
                        return <span className={props.usersCurrentPage === page ? style.current_page: '' } key={index} onClick={()=>{
                            props.changePage(page)
                        }}> {page} </span>
                    })
                }
            </div>
            {
                props.buildUsers()
            }
        </div>
    )
}

export default Users