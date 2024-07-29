import React, { useState, useEffect } from 'react';
import { fetchNCData } from '../services/DataService';
import MapView from './MapView';

function NCDataViewer({ filePath }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchNCData(filePath)
            .then(setData)
            .catch(error => {
                setError('Failed to fetch data');
                console.error(error);
            });
    }, [filePath]);

    return (
        <div>
            {error && <p>{error}</p>}
            {data ? <MapView data={data} /> : <p>Loading data...</p>}
        </div>
    );
}

export default NCDataViewer;