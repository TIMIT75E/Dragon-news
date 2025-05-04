import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const Login = () => {

    const { signUser } = use(AuthContext);
    const [error, setError] = useState("");
    const Navigate = useNavigate();
    const location = useLocation();



    const handedlLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);



        // login user
        signUser(email, password)
            .then(result => {
                console.log(result);
                Navigate(location?.state || "/")
            })
            .catch(error => {
                console.log(error);
                const errorCode = error.code;
                setError(errorCode)
            })


    }



    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5" >
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handedlLogin} className="fieldset">
                            <label className="font-semibold">Email address</label>
                            <input type="email" name='email' className="input" placeholder="Enter your email address" required />
                            <label className="font-semibold">Password</label>
                            <input type="password" name='password' className="input" placeholder="Enter your password" required />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            {
                                error && <p className='text-red-500 text-xs'>{error}</p>
                            }
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                        <p>New To This Site? please <Link className='text-red-400 underline' to="/auth/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;