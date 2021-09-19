import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {getError} from "../Auth-slice";
import {useDispatch} from "react-redux";

const Notification = styled.p`
color:red`


const Button = styled.button`
    border: none;
    padding: 10px;
    color : #2298b8 ;
    margin:10px
    width:50px
    `

const TextField = styled.input`
    border: none;
    padding: 10px;
    color : #2298b8 ;
    margin:10px
`

const ContainerForm = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;`

const ContentContainer = styled.div`
    display:flex;
    padding : 25px;
    flex-direction:column;
    justify-content:center;
    background:#D4E2E2;
    align-items:center;
    width: 250px;
    height: 250px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
`

interface FormProps {
    error?: string | null;
    formType: string;
    tittle?: string;
    onSubmit?: any;
    type?: string;
    changeName?: any;
    changePassword?: any;

}

const Form: FC<FormProps> = ({
                                 error,
                                 formType,
                                 tittle,
                                 changePassword,
                                 changeName,
                                 onSubmit,
                                 type
                             }) => {
    const dispatch = useDispatch()
    const {formState: {errors}} = useForm();


    return (
        <form onSubmit={onSubmit}>

            <ContainerForm>
                <ContentContainer>
                    {tittle}
                    <TextField onChange={changeName} type="text" placeholder="Логин пользователя"/>
                    {(error) ? <Notification>{error}</Notification> : null}
                    <TextField onChange={changePassword} placeholder="Пароль" type={type}/>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <TextField type="submit"/>
                    {formType === "login" ?
                        <Link to="/registration">
                            <Button> Регистрация </Button>
                        </Link>
                        :
                        <Link to="/login">
                            <Button onClick={() => dispatch(getError(null))}> Назад </Button>
                        </Link>
                    }
                </ContentContainer>
            </ContainerForm>


        </form>

    );
};

export default Form;