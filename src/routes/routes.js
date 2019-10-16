import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Login from '../pages/_layouts/Login'
import Dashboard from '../pages/_layouts/Dashboard'
import { isAuthenticated } from '../services/auth'
import { useSelector } from 'react-redux'

export default function RouteAuth({ isAdminOnly,isPrivate, component: Component, ...rest }) {
    const user = useSelector(state => state.user)
    if (isPrivate && !isAuthenticated())
        return <Redirect to="/" />

    if(!isPrivate && isAuthenticated()){
        return <Redirect to="/dashboard" />
    }
    if(isAdminOnly && !user.admin){
        return <Redirect to="/dashboard" />
    }

    


    
    
    const Layout = isPrivate ? Dashboard : Login

    return (
        <Route {...rest} render={props =>
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        } />
    )
}