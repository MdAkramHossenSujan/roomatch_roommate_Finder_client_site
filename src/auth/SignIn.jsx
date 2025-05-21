import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
// import { AuthContext } from '../provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { AuthContext } from '../Provider/AuthProvider';

const SignIn = () => {
    const [error, setError] = useState()
    const [email, setEmail] = useState()
    const { signIn, googleSignIn, forgetPass } = use(AuthContext)

    const location = useLocation();
    const navigate = useNavigate()
    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        setEmail(email)
        const password = form.password.value
        signIn(email, password)
            .then(result => {
                toast.success('Signed In Successfully')
                navigate(`${location.state ? location.state : '/'}`)
            }).catch(error => {
                setError(error.code)
            })
    }
    const handleForgetPassword = () => {
        if(email==undefined){
            setError('Type Your Email Here.')
        }
        forgetPass(email).then(() => {

        }).catch(error => {

        })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                toast.success('Signed In Successfully')
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(error => {
            })
    }
    return (
        <div className='py-30 Dm-Sans lg:py-40 flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-xl">
                <h1 className='py-4 text-3xl Space-Grotesk font-bold text-center'>Welcome User,<br />Login Your Account</h1>
                <div className="card-body px-6">
                    <form onSubmit={handleLogIn} className="fieldset">
                        <label className="text-lg Space-Grotesk font-bold ">Email Address</label>
                        <input required name='email' type="email" className="input bg-base-200 w-full" placeholder="Email" />
                        <label className="text-lg Space-Grotesk font-bold">Password</label>
                        <input required name='password' type="password" className="input w-full bg-base-200" placeholder="Password" />
                        <div><a onClick={handleForgetPassword} className="link link-hover">Forgot password?</a></div>
                        {
                            error && <p className='text-red-500'>{error}</p>
                        }
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='text-accent text-center text-[14px] font-bold'>Don't Have An Account?<Link className='text-red-500' to={'/auth/register'}> Register</Link></p>

                    </form>
                    <p className='text-center text-lg font-semibold text-gray-500'>Or,</p>
                    <div>
                        <button onClick={handleGoogleSignIn} type='submit' className="btn btn-block"><FcGoogle size={20} />Sign In With Google</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignIn;