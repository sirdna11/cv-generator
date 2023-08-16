import React, { useState } from 'react';

const SkillManagement = ({ onSkillsChange }) => {
    const [skills, setSkills] = useState([]);
    const [inputSkill, setInputSkill] = useState('');
    const [rating, setRating] = useState(0);

    const handleSkillAdd = () => {
        if (inputSkill && rating) {
            const newSkill = {
                name: inputSkill,
                proficiency: rating,
            };
            const updatedSkills = [...skills, newSkill];
            setSkills(updatedSkills);
            onSkillsChange(updatedSkills);

            // Clear the inputs after adding
            setInputSkill('');
            setRating(0);
        }
    };

    const handleSkillDelete = (skillToDelete) => {
        const updatedSkills = skills.filter(skill => skill.skill !== skillToDelete.skill);
        setSkills(updatedSkills);
        onSkillsChange(updatedSkills);
    };

    const renderSkillInputForm = () => (
        <div>
            <input 
                type="text" 
                placeholder="Enter Skill" 
                value={inputSkill} 
                onChange={(e) => setInputSkill(e.target.value)}
            />
            <input 
                type="number" 
                placeholder="Rating (0-10)" 
                value={rating} 
                onChange={(e) => setRating(Number(e.target.value))}
                min="0"
                max="10"
            />
            <button onClick={handleSkillAdd}>Add Skill</button>
        </div>
    );

    const renderSkillList = () => (
        <ul>
            {skills.map((skill, index) => (
                <li key={index}>
                    {skill.name}: {skill.proficiency}/10 
                    <button onClick={() => handleSkillDelete(skill)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            {renderSkillInputForm()}
            {renderSkillList()}
        </div>
    );
}

export default SkillManagement;
