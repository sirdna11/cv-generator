import React, { useState } from 'react';

const ReferenceManagement = ({ onReferencesChange }) => {
    const [references, setReferences] = useState([]);
    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [inputEmail, setInputEmail] = useState('');

    const handleReferenceAdd = () => {
        if (inputName && inputPhone && inputEmail) {
            const newReference = {
                name: inputName,
                phone: inputPhone,
                email: inputEmail
            };
            const updatedReferences = [...references, newReference];
            setReferences(updatedReferences);
            onReferencesChange(updatedReferences);

            // Clear the inputs after adding
            setInputName('');
            setInputPhone('');
            setInputEmail('');
        }
    };

    const handleReferenceDelete = (referenceToDelete) => {
        const updatedReferences = references.filter(reference => reference !== referenceToDelete);
        setReferences(updatedReferences);
        onReferencesChange(updatedReferences);
    };

    const renderReferenceInputForm = () => (
        <div>
            <input 
                type="text" 
                placeholder="Enter Name" 
                value={inputName} 
                onChange={(e) => setInputName(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Enter Phone" 
                value={inputPhone} 
                onChange={(e) => setInputPhone(e.target.value)}
            />
            <input 
                type="email" 
                placeholder="Enter Email" 
                value={inputEmail} 
                onChange={(e) => setInputEmail(e.target.value)}
            />
            <button onClick={handleReferenceAdd}>Add Reference</button>
        </div>
    );

    const renderReferenceList = () => (
        <ul>
            {references.map((reference, index) => (
                <li key={index}>
                    Name: {reference.name}, Phone: {reference.phone}, Email: {reference.email}
                    <button onClick={() => handleReferenceDelete(reference)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            {renderReferenceInputForm()}
            {renderReferenceList()}
        </div>
    );
}

export default ReferenceManagement;
