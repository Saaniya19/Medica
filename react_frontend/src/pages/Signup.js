import React, {useEffect, useState} from "react"
import '../App.css';
import { Link } from 'react-router-dom';

export const Signup = ({}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        specialization: ''
    });

    const add_doctor = async(name, email, password) => {
        await fetch('/doctor_signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, password}),
        }).then(
            console.log('User Added')
        );
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            add_doctor(name, email, password);
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };
    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <input type="text" name="specialization" placeholder="Specialization" value={formData.specialization} onChange={handleChange} required />
                <button type="submit">Signup</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};