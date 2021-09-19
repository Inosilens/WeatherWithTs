import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../pages/auth/Auth-slice";


export const Navigation:FC = () => {
    const dispatch = useDispatch()
    const handlerLogout = ()=>{
        localStorage.removeItem("auth")
        dispatch(logout())
    }
    return (
        <Link onClick={handlerLogout} to='/login'>
            Logout
        </Link>


    );
};
