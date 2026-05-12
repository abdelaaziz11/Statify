import React, { useState } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import bgImage from '../../Assests/bg-image.jpeg';

const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [show, setShow] = useState(true)
  const [serverResponse, setServerResponse] = useState('')

  const submitForm = (data) => {
    if (data.password === data.confirmPassword) {
      const body = {
        username: data.username,
        email: data.email,
        password: data.password
      }
      const requestOptions = {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(body)
      }

      fetch('http://localhost:5001/auth/signup', requestOptions)
        .then(res => res.json())
        .then(data => {
          setServerResponse(data.message)
          setShow(true)
        })
        .catch(err => console.log(err))

      reset()
    } else {
      alert("Passwords do not match")
    }
  }

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen relative flex items-center justify-center bg-cover bg-center bg-fixed pt-[70px] pb-10 px-5"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-[#0b0f19]/75 backdrop-blur-sm z-0"></div>

        <div className="relative z-10 w-full max-w-[480px] flex flex-col items-center mt-10">

          {show && serverResponse ? (
            <Alert className="w-full !bg-emerald-500/10 !border-emerald-500/20 !text-emerald-400 !rounded-xl mb-6 shadow-lg" variant="success" onClose={() => setShow(false)} dismissible>
              <p className="m-0 font-medium">{serverResponse}</p>
            </Alert>
          ) : null}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl w-full flex flex-col items-center">
            <h1 className="text-4xl font-heading font-bold text-slate-50 mb-8 bg-gradient-to-r from-indigo-400 to-sky-400 text-transparent bg-clip-text text-center">
              SIGN UP
            </h1>

            <form className="w-full flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-400">Username*</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 text-slate-50 p-3 rounded-xl focus:outline-none focus:border-brand focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
                  {...register("username", { required: true, maxLength: 25 })}
                />
                {errors.username && <p className="m-0"><small className="text-red-400">Username is required</small></p>}
                {errors.username?.type === "maxLength" && <p className="m-0"><small className="text-red-400">Max characters should be 25</small></p>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-400">Email*</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 text-slate-50 p-3 rounded-xl focus:outline-none focus:border-brand focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
                  {...register("email", { required: true, maxLength: 80 })}
                />
                {errors.email && <p className="m-0"><small className="text-red-400">Email is required</small></p>}
                {errors.email?.type === "maxLength" && <p className="m-0"><small className="text-red-400">Max characters should be 80</small></p>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-400">Password*</label>
                <input
                  type="password"
                  className="w-full bg-white/5 border border-white/10 text-slate-50 p-3 rounded-xl focus:outline-none focus:border-brand focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
                  {...register("password", { required: true, minLength: 8 })}
                />
                {errors.password && <p className="m-0"><small className="text-red-400">Password is required</small></p>}
                {errors.password?.type === "minLength" && <p className="m-0"><small className="text-red-400">Min characters should be 8</small></p>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-400">Confirm Password*</label>
                <input
                  type="password"
                  className="w-full bg-white/5 border border-white/10 text-slate-50 p-3 rounded-xl focus:outline-none focus:border-brand focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300"
                  {...register("confirmPassword", { required: true, minLength: 8 })}
                />
                {errors.confirmPassword && <p className="m-0"><small className="text-red-400">Confirm Password is required</small></p>}
                {errors.confirmPassword?.type === "minLength" && <p className="m-0"><small className="text-red-400">Min characters should be 8</small></p>}
              </div>

              <button
                className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-semibold shadow-[0_8px_20px_rgba(79,70,229,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(79,70,229,0.5)] transition-all duration-300 cursor-pointer"
                onClick={handleSubmit(submitForm)}
              >
                Sign Up
              </button>

              <p className="text-center mt-6 text-slate-400 text-sm m-0">
                Already have an account ? <Link to="/login" className="text-sky-400 font-semibold hover:text-sky-300 transition-colors">Log In here</Link>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
