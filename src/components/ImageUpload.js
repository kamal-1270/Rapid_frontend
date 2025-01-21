import React from 'react';
import './ImageUpload.css'
const ImageUpload = ({ templateData, setTemplateData }) => {
    const handleImageUpload = async (e) => {
        const formData = new FormData();
        formData.append('image', e.target.files[0]);

        const response = await fetch('http://localhost:5000/api/email/uploadImage', {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();

        if (data.filePath) {
            setTemplateData({ ...templateData, image: data.filePath });
        }
    };

    return (
        <div>
            <h2>Upload Image</h2>
            <input type="file" onChange={handleImageUpload} />
            {templateData.image && <img src={`http://localhost:5000${templateData.image}`} alt="Uploaded" />}
        </div>
    );
};

export default ImageUpload;
