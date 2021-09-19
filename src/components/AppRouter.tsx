import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import {privateRoutes, publicRoutes, RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

export const AppRouter = () => {
    const {auth} = useTypedSelector(state => state.auth)
    if (auth) {
        return (
            <Switch>
                {privateRoutes.map(route =>
                    <Route path={route.path}
                           exact={route.exact}
                           component={route.component}
                           key={route.path}/>)}
                <Redirect to={RouteNames.MAIN}/>
            </Switch>

        )
    } else {
        return (<Switch>
            {publicRoutes.map(route =>
                <Route path={route.path}
                       exact={route.exact}
                       component={route.component}
                       key={route.path}/>)}
            <Redirect to={RouteNames.LOGIN}/>
        </Switch>)

    }

};

