import React, {useState} from "react"
import Base from "../core/Base"
import {Link} from "react-router-dom"
import { signup } from '../auth/helper'
import FormData from "form-data"


const Signup = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
        role: "",
        })


    //Destructing the sestates 
    const {name , email, password, error, succes, role} = values;

    const handleChange = parameter =>  event => {
        console.log(parameter , "DA")
        console.log(event.target.value , "AD")
        setValues({...values, [parameter]: event.target.value})
    }

    // For submit button
    const onSubmit = (event)=> {
        event.preventDefault()
        console.log(values , "CC")
        setValues({...values, error: false})
        console.log(values, "PP")
        signup({...values}).then(data => {
            if(data.error){
                setValues({...values, error: data.error, error: false});
            }
            else {
                setValues({...values, name :"", email: "", password: "",
                education: "", city: "", language: "",role: "", country: "", error: "", success: true })
            }
            console.log(data)
        })
        .catch( console.log(error))
        // console.log(values)
    }

    // for success Alert 
    const successMessage = ()=> {
        return(
            <div className="alert alert-success"
            style={{display: succes ? "": "none"}}
            >
            New Account has been created. Please <Link to="/signin">Login Here</Link>
            </div>
        )
    }

    
    // For Error alert
    const errorMessage = ()=> {
        return(
            <div className="alert alert-danger"
            style={{display: error ? "": "none"}}
            >
            Unable to signin
            </div>
        )
    }



    const signUpForm = () => {
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input className="form-control" value={name} onChange={handleChange("name")} type="name" />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control" value={email} onChange={handleChange("email")} type="email" />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input className="form-control" value={password} onChange={handleChange("password")} type="password" />
                        </div>
                        <div className="form-group">
                            <label className="text-light">role</label>
                            <input className="form-control" value={role} onChange={handleChange("role")} type="role" placeholder="Login as a admin than enter 1 else 0" />
                        </div>
                        <button  onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }



    return (
        <Base title="Sign up page" description="A page for users to sign up!">
            {successMessage()}
            {errorMessage()}
           {signUpForm()}
        </Base>
    );
};

export default Signup;