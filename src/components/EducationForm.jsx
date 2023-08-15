import React, { useState } from 'react';

const getInitialEducation = () => ({
    degree: '',
    institution: '',
    startYear: '',
    endYear: '',
    currentlyStudying: false
  });
  

const EducationForm = ({ onEducationChange }) => {
  const [educations, setEducations] = useState([getInitialEducation()]);

  const addEducation = () => {
    setEducations([...educations, getInitialEducation()]);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...educations];
    list[index][name] = value;
    setEducations(list);
    onEducationChange(list); // Notifying parent about the change
  };

  const handleRemoveClick = (index) => {
    const list = [...educations];
    list.splice(index, 1);
    setEducations(list);
    onEducationChange(list); // Notifying parent about the change
  };

  return (
    <div>
      {educations.map((education, index) => (
        <div key={index}>
          <input
            name="degree"
            placeholder="Degree"
            value={education.degree}
            onChange={(e) => handleInputChange(e, index)}
          />
          <input
            name="institution"
            placeholder="Institution"
            value={education.institution}
            onChange={(e) => handleInputChange(e, index)}
          />
          <input
            type="date"
            name="startYear"
            placeholder="Start Year"
            value={education.startYear}
            onChange={(e) => handleInputChange(e, index)}
          />
          <input
            type="date"
            name="endYear"
            placeholder="End Year"
            disabled={education.currentlyStudying}
            value={education.endYear}
            onChange={(e) => handleInputChange(e, index)}
          />
          <label>
            Currently Studying:
            <input
              type="checkbox"
              name="currentlyStudying"
              checked={education.currentlyStudying}
              onChange={(e) => {
                const value = e.target.checked;
                handleInputChange({ target: { name: 'currentlyStudying', value }}, index);
                if (value) {
                  handleInputChange({ target: { name: 'endYear', value: '' }}, index);
                }
              }}
            />
          </label>
          <button onClick={() => handleRemoveClick(index)}>Delete</button>
        </div>
      ))}
      <button onClick={addEducation}>Add Education</button>
    </div>
  );
};

export default EducationForm;
