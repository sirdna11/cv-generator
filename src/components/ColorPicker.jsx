import React from 'react';

const ColorPicker = ({ onColorSelected }) => {
    const colors = ['grey', 'white', 'blue', 'green', 'yellow', 'red'];

    const ColorButton = ({ color }) => {
        return (
            <button 
                style={{ backgroundColor: color, marginRight: '10px', padding: '10px', border: 'none', cursor: 'pointer' }}
                onClick={() => onColorSelected(color)}
            >
                {color}
            </button>
        );
    };

    return (
        <div>
            {colors.map(color => (
                <ColorButton 
                    key={color} 
                    color={color} 
                />
            ))}
        </div>
    );
};

export default ColorPicker;
