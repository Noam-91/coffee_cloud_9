import axios from "axios";
import {constants} from "../shared/appConstants";

export const login = (user:{username:string, password:string})=>{

    console.log(user);
    const loginPromise = axios.post(
        `${process.env.REACT_APP_API}/login`,
        user
    );
    loginPromise
        .then(res=>{
            res.data.success && localStorage.setItem(constants.token,res.data.token);
        })
        .catch();
    return {
        type: constants.LOGIN,
        payload:loginPromise
    }
}

export const checkLogin=()=>{
    const token = localStorage.getItem(constants.token)
    let checkLoginPromise;
    if(token){
        checkLoginPromise = axios.get(
            `${process.env.REACT_APP_API}/checklogin`,
            {
                headers:{
                    authorization: `Bearer ${token}`
                }}
        );
    }
    return {
        type: constants.CHECK_LOGIN,
        payload: checkLoginPromise,
    }
}

export const logout=()=>{
    localStorage.removeItem('token');
    return {
        type: constants.LOGOUT,
        payload:null
    }
}