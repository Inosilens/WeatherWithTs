import React, {FC, useState} from 'react';
import Form from "./Components/Form";
import {useDispatch} from "react-redux";
import {authUser} from "./Auth-slice";
import {useTypedSelector} from "../../hooks/useTypedSelector";


export const Auth: FC = () => {
    const {serverError} = useTypedSelector(state => state.auth)
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
        dispatch(authUser(User))

    }

    return (
        <div>
            <Form
                error={serverError}
                type={"password"}
                formType="login"
                tittle="Вход"
                changePassword={((e: any) => changePassword(e))}
                changeName={(e: any) => changeName(e)}
                onSubmit={handlerSubmit}/>
        </div>
    );
};

