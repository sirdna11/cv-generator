import React, { useState, useEffect } from 'react';
import { pdf } from '@react-pdf/renderer';
import MyDocument from './MyDocument';
import './FormComponent.css';
import EmploymentForm from './EmploymentForm';
import EducationForm from './EducationForm';
import CanvasComponent from './CanvasComponent'
import SkillManagement from './SkillManagement'
import ReferenceManagement from './ReferenceManagement'
import LinksManagement from './LinksManagement'
import PersonalDetailsForm from './PersonalDetailsForm';
import ColorPickerComponent from './ColorPickerComponent'
import LayoutSelector from './LayoutSelector'
const INITIAL_FORM_DATA = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    city: '',
    country: '',
    summary: ''
};
const FormComponent = () => {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [employmentData, setEmploymentData] = useState([]);
    const [educationData, setEducationData] = useState([]);
    const [pdfBlob, setPdfBlob] = useState(null);
    const [skillsData, setSkillsData] = useState([]);
    const [referencesData, setReferencesData] = useState([]);
    const [linksData,setLinksData]=useState([])
    const [selectedColor, setSelectedColor] = useState('grey')
    const [layoutType, setLayoutType] = useState('sidebar');
    useEffect(() => {
        const generatePDFBlob = async () => {
            const doc = <MyDocument data={formData} employmentData={employmentData} educationData={educationData} skillsData={skillsData} referencesData={referencesData} linksData={linksData} selectedColor={selectedColor} layoutType={layoutType}/>;
            const blob = await pdf(doc).toBlob();
            setPdfBlob(blob);
        };

        generatePDFBlob();
    }, [formData, employmentData, educationData,skillsData,referencesData,linksData,selectedColor,layoutType]);
    const handleLinksChange =(newLinksData)=>{
        setLinksData(newLinksData)
    }
    const handleSkillsChange = (newSkillsData) => {
        setSkillsData(newSkillsData);
    };
    const handleReferencesChange = (newReferencesData) => {  // New handler for references
        setReferencesData(newReferencesData);
    };
    const handleColorChange = (color) => {
        setSelectedColor(color);
    };
    const handleEmploymentChange = (data) => setEmploymentData(data);
    const handleEducationChange = (data) => setEducationData(data);
    const handleChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };
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
                <div>
                   
                   
                    <PersonalDetailsForm formData={formData} handleChange={handleChange} />
                    <LinksManagement onLinksChange={handleLinksChange}/>
                </div>
                <div>
                    <h3>Employment History</h3>
                    <p>Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).</p>
                    <EmploymentForm onEmploymentChange={handleEmploymentChange} />
                    <EducationForm onEducationChange={handleEducationChange} />
                </div>
                <div>
                    <SkillManagement onSkillsChange={handleSkillsChange} />
                </div>
                <div>
                    <h3>References</h3>
                    <ReferenceManagement onReferencesChange={handleReferencesChange} />  
                </div>
                <div>
                    <LayoutSelector onLayoutSelect={setLayoutType}/>
                    <ColorPickerComponent onColorSelected={handleColorChange} />
                </div>
            </div>
            <div className='canvas-group'>
                <button onClick={downloadPDF}>Download PDF</button>
                <CanvasComponent data={formData} employmentData={employmentData} educationData={educationData} skillsData={skillsData} referencesData={referencesData} linksData={linksData} selectedColor={selectedColor} layoutType={layoutType}/>
            </div>
        </div>
    );
}

export default FormComponent;
