import React, {useState} from "react"
import Base from "../core/Base"
import {Link, useNavigate} from "react-router-dom"

import {signin, isAutheticated,authenticate} from "../auth/helper/index"


const Signin = () => {
        const [values, setValues] = useState({
            email: "",
            password: "",
            error: "",               //this interprets that their is no error
            loading: false,  //initially its false bec no event has taken place so no loading is in process
            NavigateFunction: false
        })

        const {email, password, error, loading, NavigateFunction}  = values;

    const {user} = isAutheticated();

    const navigate = useNavigate();
    
    // To get the values from the frontend and store in state
    const handleChange = parameter => event => {
        console.log(parameter , "DA")
        console.log(event.target.value , "AD")
        setValues({...values, error: false,  [parameter]: event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault();
        console.log(values , "CC")
        setValues({...values, error: false, loading: true})      //error:false bec by default error is not present just a way to write when form submission
        console.log(values, "PP")     //here loading is true to indicate that action is in progress
        signin({email, password})
        .then( data => {
            if(data.error){
                setValues({...values,error: data.error, loading: true})   // here setValues are called to show the error & reset loading
            }
            else {
                authenticate(data, ()=> {                  //authenticate to store token or data of user in local storage
                    setValues({...values, useNavigate: true}) //DidRedirect is true bec of successful signin 
                })
            }
        })
        .catch(console.log("Signin request Failed"))
    }

     // Redirect to 
     const performRedirect = () => {
        //TODo:
        if(NavigateFunction) {
            if(user && user.role === 1) {
                return <navigate  to="/admin/dashboard" />;
            }
            else {
                return <navigate  to="/userenrollemnt" />;
            }
        }
         if (isAutheticated()) {           //to see if user is using crome and is its data is store in local storage redirect to home page
            return <navigate to="/"></navigate>  
        }
    }

    // for success Alert 
    const loadingMessage = ()=> {
        return(
            loading && (
             <div className="row">
             <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-info p-1">
                    <h5 className="text-center text-white ">Loading...</h5>
                </div></div></div>
            )
        )
     }

     // For Error alert

    const errorMessage = ()=> {
        return(
            <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
            <div className="alert alert-danger p-1" 
            style={{display: error ? "": "none"}}
            >
            Unable to signin
            </div></div></div>
        )
    }

    const signInForm = () => {
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control" value={email} onChange={handleChange("email")} type="email" />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input className="form-control" value={password} onChange={handleChange("password")} type="password" />
                        </div>
                        <button className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }



    return (
        <Base title="Sign in page" description="A page for users to sign in!">
            {loadingMessage()}
            {errorMessage()}
           {signInForm()}
           {performRedirect()}
        </Base>
    );
};

export default Signin;