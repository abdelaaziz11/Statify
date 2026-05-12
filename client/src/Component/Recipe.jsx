import React from 'react';

const Recipe = ({ full_name, cin, phone_number, email, age, gender, state, city, address, marital_status, nbr_of_children, occupation, salary, onClick, onDelete }) => {
    return (
        <div className="bg-[#131b2f] border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 text-slate-300 mb-8 mt-2">
                <p className="m-0 text-[15px]"><strong className="text-indigo-400 font-medium">Name:</strong> {full_name}</p>
                <p className="m-0 text-[15px]"><strong className="text-indigo-400 font-medium">CIN:</strong> {cin}</p>
                <p className="m-0 text-[15px]"><strong className="text-indigo-400 font-medium">Phone:</strong> {phone_number}</p>
                <p className="m-0 text-[15px]"><strong className="text-indigo-400 font-medium">Email:</strong> {email}</p>
                <p className="m-0 text-[15px]"><strong className="text-indigo-400 font-medium">Age:</strong> {age}</p>
                <p className="m-0 text-[15px]"><strong className="text-indigo-400 font-medium">Gender:</strong> {gender}</p>
                <p className="m-0 text-[15px]"><strong className="text-indigo-400 font-medium">State:</strong> {state}</p>
                <p className="m-0 text-[15px]"><strong className="text-indigo-400 font-medium">City:</strong> {city}</p>
                <p className="m-0 text-[15px]"><strong className="text-indigo-400 font-medium">Address:</strong> {address}</p>
                <p className="m-0 text-[15px]"><strong className="text-indigo-400 font-medium">Marital:</strong> {marital_status}</p>
                <p className="m-0 text-[15px]"><strong className="text-indigo-400 font-medium">Children:</strong> {nbr_of_children}</p>
                <p className="m-0 text-[15px]"><strong className="text-indigo-400 font-medium">Occupation:</strong> {occupation}</p>
                <p className="m-0 text-[15px]"><strong className="text-indigo-400 font-medium">Salary:</strong> {salary}</p>
            </div>
            <div className="flex gap-4">
                <button className="px-5 py-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300 flex-1 font-semibold" onClick={onClick}>Update Form</button>
                <button className="px-5 py-2.5 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30 hover:bg-rose-500/30 hover:-translate-y-0.5 transition-all duration-300 flex-1 font-semibold" onClick={onDelete}>Delete Record</button>
            </div>
        </div>
    )
}

export default Recipe;