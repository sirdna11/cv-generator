import React from 'react';

const LayoutSelector = ({ onLayoutSelect }) => {
    const buttonStyle = {
        marginRight: '10px'
    };

    return (
        <div>
            <button style={buttonStyle} onClick={() => onLayoutSelect('original')}>Original Layout</button>
            <button style={buttonStyle} onClick={() => onLayoutSelect('sidebar')}>Sidebar Layout</button>
            <button style={buttonStyle} onClick={() => onLayoutSelect('modern')}>Minimalistic Layout</button>
        </div>
    );
};

export default LayoutSelector;
