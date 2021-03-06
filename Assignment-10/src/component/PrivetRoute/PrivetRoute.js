import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth'
const PrivetRoute = ({children,...rest}) => {

    const {user,loading} = useAuth()
    if (loading) {
        return <h1 className="text-center">Please Wait...</h1>
    }
    return (
        <Route 
            {...rest}
            render={({location})=> user.email ? children : <Redirect to={{pathname:'/log',state:{from:location}}}></Redirect>}
            >
            
        </Route>
    );
};

export default PrivetRoute;