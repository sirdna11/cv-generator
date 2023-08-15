import React, { useState, useEffect } from 'react';
import { pdf } from '@react-pdf/renderer';
import MyDocument from './MyDocument';
import './FormComponent.css';
import EmploymentForm from './EmploymentForm';
import EducationForm from './EducationForm';
import CanvasComponent from './CanvasComponent'

const INITIAL_FORM_DATA = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    link: '',
    city: '',
    country: '',
    schools: '',
    degrees: '',
    summary: ''
};

const FormComponent = () => {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [employmentData, setEmploymentData] = useState([]);
    const [educationData, setEducationData] = useState([]);
    const [pdfBlob, setPdfBlob] = useState(null);

    useEffect(() => {
        const generatePDFBlob = async () => {
            const doc = <MyDocument data={formData} EducationForm={employmentData} educationData={educationData} />;
            const blob = await pdf(doc).toBlob();
            setPdfBlob(blob);
        };

        generatePDFBlob();
    }, [formData, employmentData, educationData]);

    const handleEmploymentChange = (data) => setEmploymentData(data);
    const handleEducationChange = (data) => setEducationData(data);
    const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const downloadPDF = async () => {
        const url = URL.createObjectURL(pdfBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${formData.firstname}.pdf`;
        a.click();
    };

    return (
        <div className='form'>
            <div className='input-group'>
                <h3>Personal Details</h3>
                <div className='first-last-name'>
                    <label>First Name:<input className="input-firstname" name="firstname" value={formData.firstname} onChange={handleChange} /></label>
                    <label>Last Name:<input className="input-lastname" name="lastname" value={formData.lastname} onChange={handleChange} /></label>
                </div>
                <div className='email-phone'>
                    <label>Email:<input className='input-email' name='email' value={formData.email} onChange={handleChange} /></label>
                    <label>Phone:<input className='input-phone' name='phone' value={formData.phone} onChange={handleChange} /></label>
                </div>
                <div className='country-city'>
                    <label>Country:<input className='input-country' name='country' value={formData.country} onChange={handleChange} /></label>
                    <label>City:<input className='input-city' name='city' value={formData.city} onChange={handleChange} /></label>
                </div>
                <div className='summary'>
                    <h3>Professional Summary</h3>
                    <p>Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities, and skills.</p>
                    <textarea className='input-summary' name='summary' value={formData.summary} onChange={handleChange} />
                </div>
                <div>
                    <h3>Employment History</h3>
                    <p>Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).</p>
                    <EmploymentForm onEmploymentChange={handleEmploymentChange} />
                    <EducationForm onEducationChange={handleEducationChange} />
                </div>
            </div>
            <div>
                <button onClick={downloadPDF}>Download PDF</button>
                
                <CanvasComponent data={formData} employmentData={employmentData} educationData={educationData} />
            </div>
        </div>
    );
}

export default FormComponent;
