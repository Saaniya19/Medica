import React, { useState} from "react"
import '../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Signup = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Here");
            await axios.post('http://localhost:5000/doctor_signup', formData);
            alert('Signup successful');
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="max-w-md w-full rounded-md border-slate-200 mx-auto mt-4 bg-white p-8 border">
                <div className="mt-5">
                    <div className="text-3xl font-bold text-gray-900 mb-8 text-center">Create an Account:</div>
                    {/* <img src={process.env.PUBLIC_URL + '/assets/scotia-logo-4.png'} className="mx-auto mb-10 h-10 object-cover" alt="logo" /> */}
                </div>
                <form onSubmit={handleSubmit} className="space-y-6 mx-5">
                    <div className="flex items-center border-b border-black py-2">
                        {/* <img src={process.env.PUBLIC_URL + '/assets/profile.webp'} className="mx-auto h-7 object-cover" alt="logo" /> */}
                        <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1 placeholder:text-gray-500 appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Full Name" required />
                    </div>
                    <div className="flex items-center border-b border-black py-2">
                        {/* <img src={process.env.PUBLIC_URL + '/assets/lock.png'} className="mx-auto h-7 object-cover" alt="logo" /> */}
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1 placeholder:text-gray-500 appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Email" required />
                    </div>
                    <div className="flex items-center border-b border-black py-2">
                        {/* <img src={process.env.PUBLIC_URL + '/assets/lock.png'} className="mx-auto h-7 object-cover" alt="logo" /> */}
                        <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1 placeholder:text-gray-500 appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Password" required />
                    </div>

                    <div>
                        <button type="submit" className="mt-3 w-full py-2 px-4 bg-blue-400 hover:bg-blue-600 rounded-md text-white font-bold text-base">Sign Up</button>
                    </div>
                </form>
            </div>
            <div className="max-w-md w-full mx-auto mt-6">
                <p className="text-center font-light text-lg ">Already have an account? <Link to="/login" className="font-semibold underline decoration-1 decoration-dotted hover:decoration-solid underline-offset-4">Log in.</Link></p>
            </div>
        </div>
    );
};