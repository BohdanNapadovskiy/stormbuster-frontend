import React from 'react';
import ReactDOM from 'react-dom/client'; // Update the import to use createRoot
import App from './App';

const container = document.getElementById('root'); // Ensure you have an element with id 'root' in your HTML
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);