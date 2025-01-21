import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import
import Editor from './components/Editor';
import ImageUpload from './components/ImageUpload';
import './App.css';
import logo from './pages/images.jpeg';

const App = () => {
    const [htmlContent, setHtmlContent] = useState('');
    const [templateData, setTemplateData] = useState({ title: '', body: '', footer: '', image: '' });
    const navigate = useNavigate(); // Correct useNavigate hook

    const fetchHtmlContent = async () => {
        const response = await fetch('https://rapid-backend1.onrender.com/api/email/getEmailLayout');
        const html = await response.text();
        setHtmlContent(html);
    };

    const saveTemplate = () => {
        if (!templateData.title || !templateData.body || !templateData.footer) {
            alert('All fields are required!');
            return;
        }

        fetch('https://rapid-backend1.onrender.com/api/email/uploadEmailConfig', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                templateName: 'My Email Template',
                config: templateData,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Template saved successfully:', data);
                // After saving, navigate to the success page with templateData
                navigate('/success', { state: { templateData } }); // Pass data to SuccessPage
            })
            .catch((error) => console.error('Error saving template:', error));
    };

    return (
        <div className="App">
            {/* <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} /> */}
            <h1>Email Template Builder</h1>
            <button onClick={fetchHtmlContent}>Load Template</button>
            {htmlContent && (
                <Editor
                    htmlContent={htmlContent}
                    templateData={templateData}
                    setTemplateData={setTemplateData}
                />
            )}
            <ImageUpload templateData={templateData} setTemplateData={setTemplateData} />
            <button onClick={saveTemplate}>Save Template</button>
        </div>
    );
};

export default App;
