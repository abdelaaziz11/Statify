import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { login } from '../../auth';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../Assests/bg-image.jpeg';

const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const LoginUser = (data) => {
    const requestOptions = {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch('http://localhost:5001/auth/login', requestOptions)
      .then(res => res.json())
      .then(data => {
        login(data.access_token)
        navigate('/createform')
      })
    reset();
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-[#0b0f19]/70 backdrop-blur-sm z-0"></div>

        <div className="relative z-10 w-full max-w-[450px] p-5">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl flex flex-col items-center">
            <h1 className="text-4xl font-heading font-bold text-slate-50 mb-8 bg-gradient-to-r from-indigo-400 to-sky-400 text-transparent bg-clip-text">
              LOGIN
            </h1>

            <form className="w-full flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="username" className="text-sm font-medium text-slate-400">Username*</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 text-slate-50 p-3 rounded-xl focus:outline-none focus:border-brand focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
                  {...register("username", { required: true, maxLength: 25 })}
                />
                {errors.username && <p className="m-0"><small className="text-red-400">Username is required</small></p>}
                {errors.username?.type === "maxLength" && <p className="m-0"><small className="text-red-400">Max characters should be 25</small></p>}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-sm font-medium text-slate-400">Password*</label>
                <input
                  type="password"
                  className="w-full bg-white/5 border border-white/10 text-slate-50 p-3 rounded-xl focus:outline-none focus:border-brand focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
                  {...register("password", { required: true, minLength: 8 })}
                />
                {errors.password && <p className="m-0"><small className="text-red-400">Password is required</small></p>}
                {errors.password?.type === "minLength" && <p className="m-0"><small className="text-red-400">Min characters should be 8</small></p>}
              </div>

              <button
                className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-semibold shadow-[0_8px_20px_rgba(79,70,229,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(79,70,229,0.5)] transition-all duration-300 cursor-pointer"
                onClick={handleSubmit(LoginUser)}
              >
                Login
              </button>

              <p className="text-center mt-6 text-slate-400 text-sm">
                Do not have an account ? <Link to="/signup" className="text-sky-400 font-semibold hover:text-sky-300 transition-colors">Create One</Link>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
