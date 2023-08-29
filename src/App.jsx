import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import FormComponent  from './components/FormComponent'; // Adjust the import path to your CV generator component
import HomePage from './HomePage'; // If HomePage is in the same directory

function App() {
    return (
        <Router>
            <div>
            <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cv-generator" element={<FormComponent />} />
                </Routes>
                
            </div>
        </Router>
    );
}

export default App;

