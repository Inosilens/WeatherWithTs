import React, {FC, useState} from 'react';
import Form from "../Components/Form";
import {authUser, registerUser} from "../Auth-slice";
import {useDispatch} from "react-redux";

export const Registration:FC = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const User = {
        name: name,
        password: password
    }
    const changeName = (e: any) => {
        setName(e.target.value)
    }
    const changePassword = (e: any) => {
        setPassword(e.target.value)
    }
    const handlerSubmit = (e: any) => {
        e.preventDefault()
        dispatch(registerUser(User))

    }
    return (
        <div>
            <Form
                formType="reg"
                tittle="Регистрация"
                changePassword={((e: any) => changePassword(e))}
                changeName={(e: any) => changeName(e)}
                onSubmit={handlerSubmit}/>
        </div>
    );
};

