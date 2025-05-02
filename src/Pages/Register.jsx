import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-8">
                        <div className="text-center lg:text-left">
                            <h1 className="text-xl text-center font-bold">Login your account</h1>
                        </div>
                        <div className="card-body ">
                            <form className="fieldset space-y-5">
                                <div className='email-fild'>
                                    <label className="font-semibold">Email Address</label>
                                    <label className="input validator">
                                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2.5"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                            </g>
                                        </svg>
                                        <input type="email" placeholder="Enter your email address" required />
                                    </label>
                                    <div className="validator-hint hidden">Enter valid email address</div>
                                </div>
                                <div className="password-fild">
                                    <label className="font-semibold">Password</label>
                                    <label className="input validator">
                                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2.5"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                                ></path>
                                                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                        <input
                                            type="password"
                                            required
                                            placeholder="Enter your password"
                                            minlength="8"
                                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                                        />
                                    </label>
                                    <p className="validator-hint hidden">
                                        Must be more than 8 characters, including
                                        <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                                    </p>
                                </div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </form>
                        </div>
                        <p className='text-sm text-center'>Dont’t Have An Account ? <Link to="/auth/login" className='text-red-400'>Register</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;