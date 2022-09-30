import style from './Users.module.css';
import React from "react";
import * as axios from 'axios'
import defaultAvatar from '../../assets/images/avatar.jpg'

class Users extends React.Component{

    componentDidMount() {
        if(this.props.users.length === 0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersCurrentPage}&count=${this.props.usersCountOnPage}`, {
                headers:{
                    'API-KEY':'a4f8c407-514e-498b-9290-450a3d80d2b0'
                }
            }).then(response=>{
                this.props.addUsers(response.data.items);
                this.props.addUserCount(response.data.totalCount);
            })
        }
    }

    buildUsers = () => {
        return(
            this.props.users.map(u =>
                <div className={style.user} key={u.id}>
                    <div className={style.left}>
                        <img className={style.avatar} src={u.photos.small? u.photos.small: defaultAvatar} alt="avatar"/>
                        {u.followed?
                            <button onClick={()=>{this.props.unFollow(u.id)}}>Unfollow</ button>:
                            <button onClick={()=>{this.props.follow(u.id)}}>Follow</ button>
                        }
                    </div>
                    <div className={style.right}>
                        <p>{u.photos.small}</p>
                        <p>{u.name}</p>
                        <p>{u.location}</p>
                        <p>{this.props.usersCount}</p>
                    </div>
                </div>
            )
        )
    }

    changePage = (page) => {
        this.props.changeCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersCountOnPage}`, {
            headers:{
                'API-KEY':'a4f8c407-514e-498b-9290-450a3d80d2b0'
            }
        }).then(response=>{
            this.props.addUsers(response.data.items);
            this.props.addUserCount(response.data.totalCount);
        })
    }

    render() {
        //вывод всех страниц
        const pages = Math.ceil(this.props.usersCount / this.props.usersCountOnPage);
        let pagesArray = [];

        if(pages > 10) {
            if(this.props.usersCurrentPage > 5) {
                for (let i = this.props.usersCurrentPage-4; i <= this.props.usersCurrentPage+5; i++) {
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
                            return <span className={this.props.usersCurrentPage === page ? style.current_page: '' } key={index} onClick={()=>{
                                this.changePage(page)
                            }}> {page} </span>
                        })
                    }
                </div>
                {
                    this.buildUsers()
                }
            </div>
        );
    }
}

export default Users