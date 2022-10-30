import style from "../../../components/commons/paginator/Paginator.module.css";
import React from "react";

const Paginator = (props) => {
    const pages = Math.ceil(props.usersCount / props.usersCountOnPage);
    let pagesArray = [];

    const changePage = (page) => {
        props.changePage(page, props.usersCountOnPage)
    }

    if (pages > 10) {
        if (props.usersCurrentPage > 5) {
            for (let i = props.usersCurrentPage - 4; i <= props.usersCurrentPage + 5; i++) {
                pagesArray.push(i)
                if (i === pages) break
            }
        } else {
            for (let i = 1; i <= 10; i++) {
                pagesArray.push(i)
                if (i === pages) break
            }
        }
    } else {
        for (let i = 1; i <= pages; i++) {
            pagesArray.push(i)
        }
    }


    return (
        <div className={style.items}>
            {
                pagesArray.map((page, index) => {
                    return <span className={props.usersCurrentPage === page ? style.current_page : ''} key={index}
                                 onClick={() => {
                                     changePage(page)
                                 }}> {page} </span>
                })
            }
        </div>
    )
}

export default Paginator