import React from 'react'
import SignIn from '../pages/SignIn'
import RouteAuth from './routes'
import Home from '../pages/Home'
import Admin from '../pages/Admin'

import { BrowserRouter, Switch } from 'react-router-dom'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                
                <RouteAuth path="/" exact component={SignIn} />
                <RouteAuth  isPrivate path="/dashboard"  component={Home} />
                <RouteAuth isPrivate isAdminOnly path="/admin" component={Admin} />

            </Switch>
        </BrowserRouter>
    )
}