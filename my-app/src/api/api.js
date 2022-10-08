import * as axios from "axios";

const axiosCreeds = axios.create({
    headers:{
        'API-KEY':'a4f8c407-514e-498b-9290-450a3d80d2b0'
    },
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const UsersAPI = {
    getUsers (usersCurrentPage = 1, usersCountOnPage = 10){
        return(
            axiosCreeds.get(`users?page=${usersCurrentPage}&count=${usersCountOnPage}`)
            .then(response=>response.data)
        )
    }
}

export const FollowAPI = {
    unfollowUser (userID){
        return(
            axiosCreeds.delete(`follow/${userID}`)
                .then(response=>response.data)
        )
    },
    followUser (userID){
        return(
            axiosCreeds.post(`follow/${userID}`)
                .then(response=>response.data)
        )
    }
}

export const AuthAPI = {
    authMe (){
        return(
            axiosCreeds.get(`auth/me/`)
                .then(response=>response.data)
        )
    }
}

export const ProfileAPI = {
    getUser (userId){
        return(
            axiosCreeds.get(`profile/${userId}`)
                .then(response=>response.data)
        )
    }
}