import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'


const renderRouter = (routeList, authed, authPath = '/login',  switchProps = {}, extraProps = {}) => {
    return (
        routeList ? (
            <Switch {...switchProps}>
                {
                    routeList.map( (route, k) => (
                        <Route
                            key={route.key || k}
                            path={route.path}
                            exact={route.exact}
                            strict={route.strict}
                            render={(props) => {
                                if (!route.requiresAuth || authed || route.path === authPath) {
                                  return <route.component {...props} {...extraProps} route={route} />
                                }
                                return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
                            }}
                        />
                        )
                    )
                }
            </Switch>
        ):null
    );
}

export default renderRouter