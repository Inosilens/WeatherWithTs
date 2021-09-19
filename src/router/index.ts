import React from "react";
import {Auth} from "../pages/auth/Auth";
import {Main} from "../pages/main/Main";
import {Registration} from "../pages/auth/Registration/Registration";

interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean
}
export enum RouteNames {
    LOGIN= '/login',
    MAIN = '/main',
    REGISTRATION = '/registration'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, component: Auth},
    {path: RouteNames.REGISTRATION, exact: true, component: Registration}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.MAIN, exact: true, component: Main}
]