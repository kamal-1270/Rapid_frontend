import React from 'react';
import './Toolbar.css'
const Toolbar = ({ templateData, setTemplateData }) => {
    const handleStyleChange = (field, style, value) => {
        setTemplateData({
            ...templateData,
            [field]: { ...templateData[field], [style]: value },
        });
    };

    return (
        <div>
            <h2>Toolbar</h2>
            <div>
                <label>Text Color: </label>
                <input
                    type="color"
                    onChange={(e) => handleStyleChange('body', 'color', e.target.value)}
                />
            </div>
            <div>
                <label>Font Size: </label>
                <input
                    type="number"
                    onChange={(e) => handleStyleChange('body', 'fontSize', e.target.value + 'px')}
                />
            </div>
        </div>
    );
};

export default Toolbar;
