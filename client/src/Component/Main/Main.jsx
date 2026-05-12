import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import email from '../../Assests/email.png';
import linkedin from '../../Assests/linkedin.png';
import aboutimage from '../../Assests/images (3).jpeg';
import twitter from '../../Assests/x.png';
import videobg from '../../Assests/videobg.mp4';
import teamMember1 from '../../Assests/images (3).jpeg';
import teamMember2 from '../../Assests/images (3).jpeg';
import teamMember3 from '../../Assests/images (3).jpeg';
import teamMember4 from '../../Assests/images (3).jpeg';
import { useAuth } from '../../auth';
import Recipe from '../Recipe';
import { useForm } from 'react-hook-form'
import { Modal, Form, Button } from 'react-bootstrap'

const formFields = [
  { id: 'full_name', label: 'Full Name', type: 'text', placeholder: 'Enter full name', validation: { required: true, maxLength: 25 }, errorMsg: 'Full Name is required', errorMax: 'Max 25 chars' },
  { id: 'cin', label: 'CIN', type: 'text', placeholder: 'Enter CIN', validation: { required: true }, errorMsg: 'CIN is required' },
  { id: 'phone_number', label: 'Phone Number', type: 'text', placeholder: 'Enter phone number', validation: { required: true }, errorMsg: 'Phone is required' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter email', validation: { required: true }, errorMsg: 'Email is required' },
  { id: 'age', label: 'Age', type: 'number', placeholder: 'Enter age', validation: { required: true }, errorMsg: 'Age is required' },
  { id: 'gender', label: 'Gender', type: 'text', placeholder: 'Enter gender', validation: { required: true }, errorMsg: 'Gender is required' },
  { id: 'state', label: 'State', type: 'text', placeholder: 'Enter state', validation: { required: true }, errorMsg: 'State is required' },
  { id: 'city', label: 'City', type: 'text', placeholder: 'Enter city', validation: { required: true }, errorMsg: 'City is required' },
  { id: 'address', label: 'Address', type: 'text', placeholder: 'Enter address', validation: { required: true }, errorMsg: 'Address is required' },
  { id: 'marital_status', label: 'Marital Status', type: 'text', placeholder: 'Enter marital status', validation: { required: true }, errorMsg: 'Marital Status required' },
  { id: 'nbr_of_children', label: 'Children', type: 'number', placeholder: 'Enter number of children', validation: {} },
  { id: 'occupation', label: 'Occupation', type: 'text', placeholder: 'Enter occupation', validation: { required: true }, errorMsg: 'Occupation required' },
  { id: 'salary', label: 'Salary', type: 'number', placeholder: 'Enter salary', step: '0.01', validation: { required: true }, errorMsg: 'Salary is required' },
];

const LoggedInHome = () => {
  const [recipes, setRecipes] = useState([]);
  const [show, setShow] = useState(false);
  const { register, reset, handleSubmit, setValue, formState: { errors } } = useForm();
  const [recipeId, setRecipeId] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5001/recipe/recipes')
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(err => console.log(err));
  }, []);

  const getAllRecipes = () => {
    fetch('http://localhost:5001/recipe/recipes')
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(err => console.log(err));
  };

  const closeModal = () => setShow(false);

  const showModal = (id) => {
    setShow(true);
    setRecipeId(id);
    recipes.forEach((recipe) => {
      if (recipe.id === id) {
        Object.keys(recipe).forEach(key => setValue(key, recipe[key]));
      }
    });
  };

  const updateRecipe = (data) => {
    let token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
    const requestOptions = {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      },
      body: JSON.stringify(data)
    };

    fetch(`http://localhost:5001/recipe/recipe/${recipeId}`, requestOptions)
      .then(res => res.json())
      .then(() => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  const deleteRecipe = (id) => {
    let token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
      }
    };
    fetch(`http://localhost:5001/recipe/recipe/${id}`, requestOptions)
      .then(res => res.json())
      .then(() => getAllRecipes())
      .catch(err => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="pt-[100px] pb-16 px-6 md:px-12 bg-gradient-to-b from-[#0b0f19] to-[#131b2f] min-h-screen relative overflow-hidden">
        {/* Background ambient light */}
        <div className="absolute top-[10%] left-[50%] -translate-x-[50%] w-[800px] h-[800px] bg-sky-600/10 blur-[150px] rounded-full z-0 pointer-events-none"></div>

        <Modal show={show} size="lg" onHide={closeModal} centered contentClassName="!bg-[#131b2f] backdrop-blur-xl !border border-emerald-500/30 rounded-[2rem] shadow-[0_0_40px_rgba(16,185,129,0.2)] overflow-hidden">
          <Modal.Header closeButton closeVariant="white" className="border-b border-white/10 px-8 py-5 !bg-[#131b2f]">
            <Modal.Title className="text-3xl font-heading font-extrabold text-white">UPDATE FORM</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-8 !bg-[#131b2f]">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formFields.map((field) => (
                <div key={field.id} className={`flex flex-col gap-1.5 ${field.id === 'address' ? 'md:col-span-2' : ''}`}>
                  <label htmlFor={field.id} className="text-sm font-semibold text-slate-400 ml-1">
                    {field.label} {field.validation?.required && <span className="text-emerald-400">*</span>}
                  </label>
                  <input
                    type={field.type}
                    step={field.step}
                    id={field.id}
                    placeholder={field.placeholder}
                    className={`w-full !bg-white/5 !border !text-slate-50 p-3.5 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300 placeholder:text-slate-500/60
                      ${errors[field.id] ? '!border-red-500/50 hover:!border-red-500' : '!border-white/10 hover:!border-emerald-500/50 focus:!border-emerald-500'}
                    `}
                    {...register(field.id, field.validation)}
                  />
                  {errors[field.id]?.type === 'required' && <small className="text-red-400 font-medium ml-1">{field.errorMsg}</small>}
                  {errors[field.id]?.type === 'maxLength' && <small className="text-red-400 font-medium ml-1">{field.errorMax}</small>}
                </div>
              ))}
              <div className="md:col-span-2 mt-4 flex gap-4">
                <button type="button" onClick={closeModal} className="flex-1 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold hover:bg-white/10 transition-all duration-300">
                  Cancel
                </button>
                <button type="button" onClick={handleSubmit(updateRecipe)} className="flex-1 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold tracking-wide shadow-[0_8px_20px_rgba(16,185,129,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(16,185,129,0.5)] transition-all duration-300">
                  Update Form
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16 mt-6">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-transparent bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text mb-4 text-center">
              SUBMITTED FORMS
            </h1>
            <p className="text-slate-400 text-lg font-medium text-center max-w-2xl">
              Manage your submitted census data records directly. Update details or remove entries that are no longer accurate.
            </p>
          </div>

          {recipes.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 pb-12">
              {recipes.map((recipe) => (
                <div key={recipe.id} className="transform transition-all duration-300 hover:-translate-y-1">
                  <Recipe {...recipe} onClick={() => showModal(recipe.id)} onDelete={() => deleteRecipe(recipe.id)} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-16 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md">
              <div className="h-24 w-24 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-200 mb-2">No Records Found</h3>
              <p className="text-slate-400 text-center mb-0">You haven't submitted any census forms yet.</p>
              <Link to="/createform" className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-semibold shadow-[0_5px_15px_rgba(99,102,241,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(99,102,241,0.5)] transition-all">
                Create New Form
              </Link>
            </div>
          )}
        </div>
      </div >
    </>
  );
};

const LoggedOutHome = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19]/40 to-[#0b0f19] z-10" />
        <video src={videobg} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0 opacity-60" />
        <div className="relative z-20 flex flex-col items-center text-center max-w-4xl px-5 -mt-12">
          <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-heading font-bold bg-gradient-to-r from-indigo-400 to-sky-400 text-transparent bg-clip-text mt-5 mb-6 leading-tight drop-shadow-2xl">
            Empowering Morocco Through Data
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Statify transforms national statistical reporting by putting precision, performance, and transparency first.
          </p>
          <Link to="/login">
            <button className="text-lg font-semibold px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-[0_10px_25px_rgba(79,70,229,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(79,70,229,0.6)] transition-all duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-5 min-h-[80vh] flex justify-center items-center bg-[#0b0f19]" id="about">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-16 relative">
            <h1 className="text-4xl font-heading font-bold text-slate-50 uppercase mb-3">About Us</h1>
            <span className="text-slate-400 text-lg">Statify is a Morocco statistics online platform</span>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-brand rounded-full"></div>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl group">
            <div className="w-full lg:w-1/3">
              <img src={aboutimage} alt="about" className="w-full h-[280px] object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="w-full lg:w-2/3">
              <p className="text-slate-300 text-lg leading-relaxed text-justify lg:text-left">
                Statify is a groundbreaking platform designed to transform the way Morocco conducts its national census. Our mission is to streamline the data collection process by empowering citizens to participate directly. We believe that by modernizing this vital task, we can improve the accuracy, efficiency, and cost-effectiveness of large-scale statistical reporting. At Statify, we're committed to innovation that benefits both the government and the people. Our platform enables individuals to easily input their own information, eliminating the need for traditional data collectors and saving valuable time and resources. Join us in building a smarter, more connected Morocco, where every voice matters, and every data point contributes to a brighter future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 px-5 bg-[#131b2f]" id="team">
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl font-heading font-bold text-slate-50 uppercase mb-3">Team Members</h1>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-brand rounded-full"></div>
        </div>

        <Carousel interval={5000} pause={false} controls={true} className="max-w-3xl mx-auto pb-12">
          {[
            { img: teamMember1, name: "Mounim Nadir", role: "Fullstack & Specialise in The Frontend", subrole: "DevOps" },
            { img: teamMember2, name: "Abdelaaziz Khouda", role: "Fullstack & Specialise in the Frontend", subrole: "Database" },
            { img: teamMember3, name: "Mohamed El Bouhmi", role: "Fullstack & Specialise in the Backend", subrole: "DevOps" },
            { img: teamMember4, name: "Hamid Bouayadi", role: "Fullstack & Specialise in the Backend", subrole: "DevOps" }
          ].map((member, index) => (
            <Carousel.Item key={index}>
              <div className="flex flex-col items-center pt-16 pb-8 px-4">
                {/* Avatar overlapping the card */}
                <div className="relative z-10 mb-[-80px]">
                  <img
                    className="rounded-full h-[160px] w-[160px] object-cover border-4 border-[#1e293b] shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all duration-500 hover:border-brand hover:scale-105"
                    src={member.img}
                    alt={member.name}
                  />
                </div>
                {/* Info card */}
                <div className="bg-white/[0.04] backdrop-blur-lg border border-white/10 rounded-2xl pt-24 pb-8 px-10 text-center max-w-[500px] w-full shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                  <h2 className="text-2xl font-bold font-heading text-slate-50 mb-2">{member.name}</h2>
                  <p className="text-brand text-base font-medium mb-1">{member.role}</p>
                  <p className="text-slate-400 text-xs uppercase tracking-[0.2em] font-semibold">{member.subrole}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 px-5 bg-[#0b0f19]" id="contact">
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl font-heading font-bold text-slate-50 uppercase mb-3">Team Socials</h1>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-brand rounded-full"></div>
        </div>

        {[
          { name: "Mounim's", email: "mounimnadir7@gmail.com", linkedin: "mounim-nadir-b6575b27a", twitter: "MounimNadir" },
          { name: "Abdelaziz's", email: "abdelkhouda055@gmail.com", linkedin: "abdel-khouda-502b03253", twitter: "AbdelKhouda" },
          { name: "Mohammed's", email: "Bouayadihamid@gmail.com", linkedin: "mounim-nadir-b6575b27a", twitter: "AbdelKhouda" },
          { name: "Hamid's", email: "Bouayadihamid@gmail.com", linkedin: "hamid-bouayadi", twitter: "HamidBouayadi" }
        ].map((contact, index) => (
          <div key={index} className="flex flex-col items-center mb-12 last:mb-0">
            <h1 className="text-2xl font-heading font-bold text-slate-200 uppercase mb-2">{contact.name}</h1>
            <p className="text-slate-400 mb-6 font-medium">Get in Touch</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-8 sm:px-12 py-4 shadow-xl">
              <div className="flex items-center gap-3">
                <img src={email} alt="Email icon" className="h-[28px] w-[28px] object-contain transition-transform hover:scale-110 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]" />
                <a href={`mailto:${contact.email}`} className="text-slate-300 hover:text-brand font-medium transition-colors">Gmail</a>
              </div>
              <div className="flex items-center gap-3">
                <img src={linkedin} alt="LinkedIn icon" className="h-[28px] w-[28px] object-contain transition-transform hover:scale-110 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]" />
                <a href={`https://www.linkedin.com/in/${contact.linkedin}`} className="text-slate-300 hover:text-brand font-medium transition-colors">LinkedIn</a>
              </div>
              <div className="flex items-center gap-3">
                <img src={twitter} alt="Twitter icon" className="h-[28px] w-[28px] object-contain transition-transform hover:scale-110 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]" />
                <a href={`https://x.com/${contact.twitter}`} className="text-slate-300 hover:text-brand font-medium transition-colors">X-Twitter</a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

function Main() {
  const [logged] = useAuth()
  return (
    <div>
      {logged ? <LoggedInHome /> : <LoggedOutHome />}
    </div>
  );
}

export default Main;
