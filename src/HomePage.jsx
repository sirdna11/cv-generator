import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Welcome to Our Website</h1>
            <p style={styles.text}>Here, you can generate your CV easily and efficiently. Our tools provide a streamlined approach to creating a professional CV that stands out.</p>
            
            <div style={styles.buttonContainer}>
                <Link to="/cv-generator" style={styles.link}>
                    <button style={styles.button}>Go to CV Generator</button>
                </Link>
                
               
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
        padding: '20px'
    },
    header: {
        color: '#333',
        fontSize: '2em',
        marginBottom: '20px'
    },
    text: {
        color: '#555',
        maxWidth: '500px',
        textAlign: 'center',
        marginBottom: '30px'
    },
    buttonContainer: {
        display: 'flex',
        gap: '20px'
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: '0.3s',
        '&:hover': {
            backgroundColor: '#0056b3'
        }
    },
    placeholderButton: {
        backgroundColor: '#ccc',
        color: '#333',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'not-allowed'
    },
    link: {
        textDecoration: 'none'
    }
};

export default HomePage;
