import React, { useState } from 'react';

const getInitialEmployment = () => ({
    jobTitle: '',
    description: '',
    employer: '',
    startTime: '',
    endTime: '',
    currentlyEmployed: false
  });

const EmploymentForm = ({onEmploymentChange}) => {
  const [employments, setEmployments] = useState([getInitialEmployment()]);

  const addEmployment = () => {
    setEmployments([...employments, getInitialEmployment()]);
};

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...employments];
    list[index][name] = value;
    setEmployments(list);
    onEmploymentChange(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...employments];
    list.splice(index, 1);
    setEmployments(list);
    onEmploymentChange(list);
  };

  return (
    <div>
      {employments.map((employment, index) => (
        <div key={index}>
          <input
            name="jobTitle"
            placeholder="Job Title"
            value={employment.jobTitle}
            onChange={(e) => handleInputChange(e, index)}
          />
          <input
            name="description"
            placeholder="Description"
            value={employment.description}
            onChange={(e) => handleInputChange(e, index)}
          />
          <input
            name="employer"
            placeholder="Employer"
            value={employment.employer}
            onChange={(e) => handleInputChange(e, index)}
          />
          <input
    type="date"
    name="startTime"
    placeholder="Start Time"
    value={employment.startTime}
    onChange={(e) => handleInputChange(e, index)}
/>


<input
    type="date"
    name="endTime"
    placeholder="End Time"
    disabled={employment.currentlyEmployed}
    value={employment.endTime}
    onChange={(e) => handleInputChange(e, index)}
/>


<label>
    Currently Employed:
    <input
        type="checkbox"
        name="currentlyEmployed"
        checked={employment.currentlyEmployed}
        onChange={(e) => {
            const value = e.target.checked;
            handleInputChange({ target: { name: 'currentlyEmployed', value }}, index);
            if (value) {
                handleInputChange({ target: { name: 'endTime', value: '' }}, index);
            }
        }}
    />
</label>
          <button onClick={() => handleRemoveClick(index)}>Delete</button>
        </div>
      ))}
      <button onClick={addEmployment}>Add one more employment</button>
    </div>
  );
};

export default EmploymentForm;
