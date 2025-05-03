import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthContext';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, photo, email, password);

    createUser(email, password)
      .then(result => {
        console.log("User created:", result.user);
        navigate("/");
      })
      .catch(error => {
        console.error("Error creating user:", error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-lg px-10 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Register your account</h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-[558px] h-[65px] border border-gray-300 rounded-lg px-4 text-base bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className="w-[558px] h-[65px] border border-gray-300 rounded-lg px-4 text-base bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="w-[558px] h-[65px] border border-purple-600 rounded-lg px-4 text-base"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-[558px] h-[65px] border border-gray-300 rounded-lg px-4 text-base bg-gray-100"
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-sm">Accept <span className="underline">Term & Conditions</span></p>
          </div>

          <button
            type="submit"
            className="w-[558px] h-[65px] bg-black text-white font-semibold rounded-lg text-lg"
          >
            Register
          </button>

          <p className="text-center text-sm mt-4">
            You have Already An Account? please <Link className="text-blue-500 underline" to="/auth/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
