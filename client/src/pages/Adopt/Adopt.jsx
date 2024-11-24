import React, { useState } from 'react';
import axios from 'axios';

const Adopt = () => {
    const [formData, setFormData] = useState({
        userId: '',
        petId: '',
        hoursAlone: '',
        householdAgreement: '',
        petLocation: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with your backend URL
        axios.post(`${import.meta.env.BACKEND_URI}/adoption-form`, formData)
            .then(response => {
                console.log('Form submitted successfully:', response.data);
            })
            .catch(error => {
                console.error('There was an error submitting the form:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Adoption Form</h2>

            <div className="mb-4">
                <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
                    User ID:
                </label>
                <input
                    type="text"
                    id="userId"
                    name="userId"
                    value={formData.userId}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="petId" className="block text-sm font-medium text-gray-700">
                    Pet ID:
                </label>
                <input
                    type="text"
                    id="petId"
                    name="petId"
                    value={formData.petId}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="hoursAlone" className="block text-sm font-medium text-gray-700">
                    How many hours will the pet be left alone each day?
                </label>
                <input
                    type="text"
                    id="hoursAlone"
                    name="hoursAlone"
                    value={formData.hoursAlone}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="householdAgreement" className="block text-sm font-medium text-gray-700">
                    Does everyone in your household agree to adopt the pet?
                </label>
                <input
                    type="text"
                    id="householdAgreement"
                    name="householdAgreement"
                    value={formData.householdAgreement}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="petLocation" className="block text-sm font-medium text-gray-700">
                    Where will the pet be kept most of the time?
                </label>
                <input
                    type="text"
                    id="petLocation"
                    name="petLocation"
                    value={formData.petLocation}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
};

export default Adopt;
