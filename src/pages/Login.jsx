import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const [error,setError] = useState("")

    const {logIn} = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value
        logIn(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(`${location.state?location.state:"/"}`)
        }).catch(error=>{
            const errorCode = error.code;
            setError(errorCode)
            console.log(error.Massage)
        })
    }


  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Login your account</h2>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input required name="email" type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input required name="password" type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {
              error && <p className="text-red-500 text-sm">{error}</p>
            }
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold text-center pt-5">Dont’t Have An Account ? <Link className="text-secondary" to="/auth/register">Register</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
