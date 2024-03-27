import React from "react";
import {useNavigate , Route} from "react-router-dom"
import { isAutheticated } from "./index";



// Private Route where we can render private user component
const PrivateRoutePrivateRoute = ({component: Component, ...rest}) => {
    const navigate = useNavigate();
    console.log(PrivateRoutePrivateRoute)
   return(
    <Route 
    {...rest}
    render={props =>
    isAutheticated() ? (
        <Component {...props} />
    ) : (
        <button onClick={() => navigate("/signin")}>
            Navigate to Sign In
          </button>
    )
    }
    />
   )
}


export default PrivateRoutePrivateRoute