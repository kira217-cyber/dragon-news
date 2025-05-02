import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const {createUser,setUser,updateUser} = use(AuthContext)
    const [nameError,setNameError] = useState('')
    const navigate = useNavigate()

    const handleRegister = (e) =>{
        e.preventDefault()
        const form = e.target;

        const name =form.name.value;
        if(name.length < 6){
          setNameError("Name should be more then 6 Character")
          return
        }else{
          setNameError('')
        }
        const photo  =form.photo.value;
        const email = form.email.value;
        const password = form.password.value

        // console.log(name,photo,email,password)

        createUser(email,password)
        .then(result=>{
            const user = result.user
            updateUser({displayName:name,photoURL:photo}).then(()=>{
              setUser({...user,displayName:name,photoURL:photo})
              navigate('/')
            }).catch(error=>{
              console.log(error)
              setUser(user)
              
            })
          
            
        }).catch(error=>{
            alert(error.Massage)
        })
    }

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input name="name" type="text" required className="input" placeholder="Name" />
            {
              nameError && <p className="text-red-500 text-sm">{nameError}</p>
            }
            {/* photo url */}
            <label className="label">Photo URL</label>
            <input name="photo" type="text" required className="input" placeholder="Photo URL" />
            {/* email */}
            <label className="label">Email</label>
            <input name="email" type="email" required className="input" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input name="password" type="password" required className="input" placeholder="Password" />
            
            <button type="submit" className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center pt-5">
               Already Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
