import React, { useState, useEffect } from 'react';

const INITIAL_PERSONAL_DETAILS = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    city: '',
    country: '',
    summary: ''
};
const PersonalDetailsForm = ({  handleChange }) => {
    const [personalData, setPersonalData] = useState(INITIAL_PERSONAL_DETAILS);

    const handleChangeLocal = (e) => {
        const { name, value } = e.target;
        setPersonalData(prevData => ({ ...prevData, [name]: value }));
        handleChange(name, value);  // Propagate the change to the parent component
    };

    return (
        <div>
            <h3>Personal Details</h3>
            <div className='first-last-name'>
                <label>First Name:
                    <input className="input-firstname" name="firstname" value={personalData.firstname} onChange={handleChangeLocal} />
                </label>
                <label>Last Name:
                    <input className="input-lastname" name="lastname" value={personalData.lastname} onChange={handleChangeLocal} />
                </label>
            </div>
            <div className='email-phone'>
                <label>Email:
                    <input className='input-email' name='email' value={personalData.email} onChange={handleChangeLocal} />
                </label>
                <label>Phone:
                    <input className='input-phone' name='phone' value={personalData.phone} onChange={handleChangeLocal} />
                </label>
            </div>
            <div className='country-city'>
                <label>Country:
                    <input className='input-country' name='country' value={personalData.country} onChange={handleChangeLocal} />
                </label>
                <label>City:
                    <input className='input-city' name='city' value={personalData.city} onChange={handleChangeLocal} />
                </label>
            </div>

            <div className='summary'>
                <h3>Professional Summary</h3>
                <p>Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities, and skills.</p>
                <textarea className='input-summary' name='summary' value={personalData.summary} onChange={handleChangeLocal} />
            </div>
        </div>
    );
}

export default PersonalDetailsForm;
