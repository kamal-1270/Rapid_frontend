// import React, { useState, useEffect } from 'react';
// import './Editor.css'
// const Editor = () => {
//   const [layout, setLayout] = useState('');
//   const [fields, setFields] = useState({ title: '', content: '', image: '' });

//   useEffect(() => {
//     fetch('http://localhost:5000/api/email/getEmailLayout')
//       .then((res) => res.json())
//       .then((data) => setLayout(data.html));
//   }, []);

//   const handleFileChange = async (e) => {
//     const formData = new FormData();
//     formData.append('image', e.target.files[0]);

//     const res = await fetch('http://localhost:5000/api/email/uploadImage', {
//       method: 'POST',
//       body: formData,
//     });
//     const data = await res.json();
//     setFields({ ...fields, image: data.filePath });
//   };

//   const handleSave = async () => {
//     const res = await fetch('http://localhost:5000/api/email/uploadEmailConfig', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(fields),
//     });
//     const data = await res.json();
//     alert(data.message);
//   };

//   return (
//     <div>
//       <h1>Email Editor</h1>
//       <div dangerouslySetInnerHTML={{ __html: layout }} />
//       <input
//         type="text"
//         placeholder="Title"
//         value={fields.title}
//         onChange={(e) => setFields({ ...fields, title: e.target.value })}
//       />
//       <textarea
//         placeholder="Content"
//         value={fields.content}
//         onChange={(e) => setFields({ ...fields, content: e.target.value })}
//       />
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// };

// export default Editor;

import React from 'react';
import './Editor.css'
import logo from '../pages/images.jpeg'
const Editor = ({ htmlContent, templateData, setTemplateData }) => {
    const handleInputChange = (field, value) => {
        setTemplateData({ ...templateData, [field]: value });
    };

    return (
        <div>
            {/* <h2>Editor</h2> */}
            <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            <label>
                Title:
                <input
                    type="text"
                    value={templateData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                />
            </label>
            <label>
                Body:
                <textarea
                    value={templateData.body}
                    onChange={(e) => handleInputChange('body', e.target.value)}
                />
            </label>
            <label>
                Footer:
                <input
                    type="text"
                    value={templateData.footer}
                    onChange={(e) => handleInputChange('footer', e.target.value)}
                />
            </label>
        </div>
    );
};

export default Editor;
