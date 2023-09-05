import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';

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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <DatePicker
          style={styles.datePickerSpacing}
              className="date-picker-spacing"
              name="startYear"
              placeholder="startYear"
              value={education.startYear ? moment(education.startYear) : null}
              onChange={(date, dateString) => handleInputChange({ target: { name: 'startYear', value: dateString } }, index)}
          />

          <DatePicker
            style={styles.datePickerSpacing}
            className="date-picker-spacing"
            name="endYear"
            placeholder="End Year"
            disabled={education.currentlyStudying}
            value={education.endYear ? moment(education.endYear) : null}
            onChange={(date, dateString) => handleInputChange({ target: { name: 'endYear', value: dateString } }, index)}
          />
          <label>
            Currently Studying:
            <input
              className='bruh'
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
          <button className="delete-button" style={{ marginTop: '0px' }} onClick={() => handleRemoveClick(index)}>Delete</button>
          </div>
        </div>
      ))}
      
      <button className="centered-button" onClick={addEducation}>Add Education</button>
      
    </div>
  );
};

// Local component styles
const styles = {
    datePickerSpacing: {
      marginRight:"5px"
    },
    
};

export default EducationForm;
