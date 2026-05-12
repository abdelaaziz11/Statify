import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Component/Navbar/Navbar';
import { Alert } from 'react-bootstrap';

const CreateRecipePage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [showSuccess, setShowSuccess] = useState(false);
  const [serverResponse, setServerResponse] = useState('');

  const createRecipe = async (data) => {
    const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');

    const requestOptions = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`,
      },
      body: JSON.stringify(data),
    };

    try {
      const res = await fetch('http://localhost:5001/recipe/recipes', requestOptions);

      if (!res.ok) {
        const errorMessage = await res.text();
        throw new Error(`Error: ${errorMessage}`);
      }

      const responseData = await res.json();
      setServerResponse('Data successfully submitted to the census platform!');
      setShowSuccess(true);
      reset();
    } catch (err) {
      console.log('Fetch error:', err);
      // alert(`Error: ${err.message}`);
    }
  };

  const formFields = [
    { id: 'full_name', label: 'Full Name', type: 'text', placeholder: 'Enter full name', validation: { required: true, maxLength: 25 }, errorMsg: 'Full Name is required', errorMax: 'Full Name should be less than 25 characters' },
    { id: 'cin', label: 'CIN', type: 'text', placeholder: 'Enter CIN', validation: { required: true }, errorMsg: 'CIN is required' },
    { id: 'phone_number', label: 'Phone Number', type: 'text', placeholder: 'Enter phone number', validation: { required: true }, errorMsg: 'Phone Number is required' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter email', validation: { required: true }, errorMsg: 'Email is required' },
    { id: 'age', label: 'Age', type: 'number', placeholder: 'Enter age', validation: { required: true }, errorMsg: 'Age is required' },
    { id: 'gender', label: 'Gender', type: 'text', placeholder: 'Enter gender', validation: { required: true }, errorMsg: 'Gender is required' },
    { id: 'state', label: 'State', type: 'text', placeholder: 'Enter state', validation: { required: true }, errorMsg: 'State is required' },
    { id: 'city', label: 'City', type: 'text', placeholder: 'Enter city', validation: { required: true }, errorMsg: 'City is required' },
    { id: 'address', label: 'Address', type: 'text', placeholder: 'Enter address', validation: { required: true }, errorMsg: 'Address is required' },
    { id: 'marital_status', label: 'Marital Status', type: 'text', placeholder: 'Enter marital status', validation: { required: true }, errorMsg: 'Marital Status is required' },
    { id: 'nbr_of_children', label: 'Number of Children', type: 'number', placeholder: 'Enter number of children', validation: {} },
    { id: 'occupation', label: 'Occupation', type: 'text', placeholder: 'Enter occupation', validation: { required: true }, errorMsg: 'Occupation is required' },
    { id: 'salary', label: 'Salary', type: 'number', placeholder: 'Enter salary', step: '0.01', validation: { required: true }, errorMsg: 'Salary is required' },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-[#0b0f19] to-[#131b2f] pt-[100px] pb-16 px-5 relative">
        {/* Background ambient light */}
        <div className="absolute top-[20%] left-[50%] -translate-x-[50%] w-[600px] h-[600px] bg-indigo-600/20 blur-[130px] rounded-full z-0 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {showSuccess && (
            <Alert className="w-full !bg-emerald-500/10 !border-emerald-500/20 !text-emerald-400 !rounded-2xl mb-8 shadow-lg backdrop-blur-md" variant="success" onClose={() => setShowSuccess(false)} dismissible>
              <p className="m-0 font-medium text-center text-lg">{serverResponse}</p>
            </Alert>
          )}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-transparent bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text mb-4">
                CREATE FORM
              </h1>
              <p className="text-slate-400 text-lg font-medium">Please fill out the details accurately to submit your data to the Statify platform.</p>
            </div>

            <form onSubmit={handleSubmit(createRecipe)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formFields.map((field) => (
                <div key={field.id} className={`flex flex-col gap-2 ${field.id === 'address' ? 'md:col-span-2' : ''}`}>
                  <label htmlFor={field.id} className="text-sm font-semibold text-slate-300 ml-1">
                    {field.label} {field.validation?.required && <span className="text-sky-500">*</span>}
                  </label>
                  <input
                    type={field.type}
                    step={field.step}
                    id={field.id}
                    placeholder={field.placeholder}
                    className={`w-full bg-white/5 text-slate-50 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 placeholder:text-slate-500/80 backdrop-blur-sm
                      ${errors[field.id] ? 'border-2 border-red-500/50 hover:border-red-500' : 'border border-white/10 hover:border-indigo-500/50 focus:border-indigo-500'}
                    `}
                    {...register(field.id, field.validation)}
                  />
                  {errors[field.id]?.type === 'required' && <small className="text-red-400 font-medium ml-2">{field.errorMsg}</small>}
                  {errors[field.id]?.type === 'maxLength' && <small className="text-red-400 font-medium ml-2">{field.errorMax}</small>}
                </div>
              ))}

              <div className="md:col-span-2 mt-8">
                <button
                  type="submit"
                  className="w-full py-5 rounded-2xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-bold text-lg tracking-wide shadow-[0_10px_30px_rgba(79,70,229,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(79,70,229,0.5)] transition-all duration-300 cursor-pointer"
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateRecipePage;
