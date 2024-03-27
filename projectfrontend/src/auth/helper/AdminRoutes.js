import React from "react";
import {Route , useNavigate} from "react-router-dom"
import { isAutheticated } from "./index";

// Admin Private Route where we can render private Admin component
const AdminRoute = ({component: Component, ...rest}) => {
    const navigate = useNavigate();
    return(
        <Route 
        {...rest}
        render={props =>
        isAutheticated() && isAutheticated().user.role === 1 ? (
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


export default AdminRoute