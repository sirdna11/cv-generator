import React, { useState } from 'react';
import { Popover, Button, Input } from 'antd';

const ColorPickerComponent = ({ onColorSelected }) => {
    const colors = ['grey', 'white', 'blue', 'green', 'yellow', 'red'];
    const [customColor, setCustomColor] = useState('white'); // start with black as default

    return (
        <Popover 
            content={
                <div>
                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                        {colors.map(color => (
                            <div
                                key={color}
                                style={{ backgroundColor: color, width: '30px', height: '30px', marginLeft: '10px', cursor: 'pointer' }}
                                onClick={() => onColorSelected(color)}
                            />
                        ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Input 
                            type="color" 
                            value={customColor} 
                            onChange={e => {
                                const selectedColor = e.target.value;
                                setCustomColor(selectedColor);
                                onColorSelected(selectedColor);
                            }}
                        />
                        <span style={{ marginLeft: '10px' }}>Custom</span>
                    </div>
                </div>
            }
            trigger="click"
        >
            <Button type="primary">Select Color</Button>
        </Popover>
    );
};

export default ColorPickerComponent;
