import React, { useState } from 'react';

const LinksManagement = ({ onLinksChange }) => {
    const [links, setLinks] = useState([]);
    const [label, setLabel] = useState('');
    const [url, setUrl] = useState('');

    const handleLinkAdd = () => {
        if (label && url) {
            const newLink = {
                label,
                url,
            };
            const updatedLinks = [...links, newLink];
            setLinks(updatedLinks);
            onLinksChange(updatedLinks);  // Notify parent about the link change

            // Clear the inputs after adding
            setLabel('');
            setUrl('');
        }
    };

    const handleLinkDelete = (linkToDelete) => {
        const updatedLinks = links.filter(link => link.url !== linkToDelete.url);
        setLinks(updatedLinks);
        onLinksChange(updatedLinks);  // Notify parent about the link change
    };

    const renderLinkInputForm = () => (
        <div>
            <input 
                type="text" 
                placeholder="Label (e.g. My Portfolio)" 
                value={label} 
                onChange={(e) => setLabel(e.target.value)}
            />
            <input 
                type="url" 
                placeholder="URL (e.g. https://www.example.com)" 
                value={url} 
                onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={handleLinkAdd}>Add Link</button>
        </div>
    );

    const renderLinkList = () => (
        <ul>
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                    <button onClick={() => handleLinkDelete(link)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            {renderLinkInputForm()}
            {renderLinkList()}
        </div>
    );
}

export default LinksManagement;
