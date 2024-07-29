// src/App.js
import React from 'react';
import NCDataViewer from './components/NCDataViewer';

function App() {
    return (
        <div className="App">
            <h1>NetCDF Data Viewer</h1>
            {/* Example file path, adjust as needed */}
            <NCDataViewer filePath="/home/oem/result/ppi03_dbzh/20240728042128.nc" />
        </div>
    );
}

export default App;