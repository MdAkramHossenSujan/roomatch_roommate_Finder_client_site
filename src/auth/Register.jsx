import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const [checkError, setCheckError] = useState('')
    const [passError, setPassError] = useState('')
    const navigate = useNavigate()
    const { createUser,updateUser,setUser,googleSignIn } = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        if (name.length < 5) {
            setError('Name Should Be More Than 5 words.')
            return;
        }
        else if(name.length>=5){
            setError('')
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
        if (!passwordPattern.test(password)) {
            setPassError('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
            return;
        }
        else if(passwordPattern.test(password)){
            setPassError('')
        }
        const checkbox = form.checkbox;
        if (!checkbox.checked) {
            setCheckError('Accept Term And Conditions.')
            return
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        toast.success('Created User Successfully')
                        navigate('/')
                    }).catch(error => {

                    })
            }).catch(error => {
                setPassError(error.message)
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                toast.success('Logged In Successfully')
                navigate('/')
            })
            .catch(error => {
            })
    }
    return (
        <div className='min-h-screen Dm-Sans dark:text-white flex justify-center items-center'>
            <div className="card px-6  w-full max-w-2xl shrink-0">
                <div className='space-y-2 Space-Grotesk text-center'>
                    <p className=' text-3xl  font-bold'>New Here?</p>
                    <h1 className=' text-3xl font-bold'>Welcome To Our Website, <br />Register Your Account</h1>
                </div>
                <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                        <label className="text-lg Space-Grotesk font-bold ">Your Name</label>
                        <input required name='name' type="text" className="input text-gray-800 shadow-lg w-full" placeholder="Enter Your Name" />
                        {
                            error && <p className='text-red-500'>{error}</p>
                        }
                        <label className="text-lg Space-Grotesk font-bold ">Photo URL</label>
                        <input required name='photo' type="link" className="input text-gray-800 shadow-lg w-full" placeholder="Enter Your Photo URL" />
                        <label className="text-lg Space-Grotesk font-bold ">Email Address</label>
                        <input required name='email' type="email" className="input text-gray-800 shadow-lg w-full" placeholder="Email" />
                        <label className="text-lg Space-Grotesk font-bold">Password</label>
                        <input required name='password' type="password" className="input dark:text-white text-gray-800 w-full shadow-lg" placeholder="Password" />
                        {
                            passError && <p className='text-red-500'>{passError}</p>
                        }
                        <div className='flex mt-2  gap-3'><input name='checkbox' type="checkbox" className="checkbox dark:text-white dark:border-white" /><p className='my-auto text-accent text-[14px] font-semibold'>Accept Term & Conditions</p></div>
                        {
                            checkError && <p className='text-red-500'>{checkError}</p>
                        }
                        <button type='submit' className="btn dark:bg-white text-white dark:text-green-950 bg-green-950 mt-2">Register</button>
                        <p className='text-accent text-center text-[14px] font-bold'>Already Have An Account?<Link className='text-red-500' to={'/auth/signIn'}> Login</Link></p>

                    </fieldset>
                </form>
                <p className='text-center text-lg font-semibold text-gray-500'>Or,</p>
                <div>
                    <button onClick={handleGoogleSignIn} type='submit' className="btn btn-block"><FcGoogle size={20} />Sign In With Google</button>
                </div>
            </div>

        </div>
    );
};

export default Register;