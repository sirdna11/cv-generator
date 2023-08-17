// LayoutSelector.js

import React from 'react';

const LayoutSelector = ({ onLayoutSelect }) => {
    return (
        <div>
            <button onClick={() => onLayoutSelect('original')}>Original Layout</button>
            <button onClick={() => onLayoutSelect('sidebar')}>Sidebar Layout</button>
            <button onClick={() => onLayoutSelect('modern')}>Minimalistic Layout</button>
           
        </div>
    );
};

export default LayoutSelector;
