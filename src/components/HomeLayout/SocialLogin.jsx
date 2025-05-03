import React, { use } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { auth, AuthContext} from '../../Provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';





const SocialLogin = () => {


    const {googleLogin,githubLogin} = use(AuthContext)

    const handleGoogleLogin = ()=>{

        const provider  =  new GoogleAuthProvider()

        googleLogin(auth, provider).then((result)=>{
            alert("Login Successfully")
        }).catch(error=>{
            alert(error.message)
            console.log(error.message)
        })
    }

    const handleGithubLogin = ()=>{

        const provider = new GithubAuthProvider()
        
        githubLogin(auth, provider).then((result)=>{
            alert("Login Successfully")
        }).catch(error=>{
            alert(error.message)
            console.log(error.message)
        })


    }

    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
            <div className='space-y-3'>
                <button onClick={handleGoogleLogin} className='btn btn-secondary btn-outline w-full'><FcGoogle size={24} /> Login With Google</button>
                <button onClick={handleGithubLogin} className='btn btn-primary btn-outline w-full'><FaGithub size={24} /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;