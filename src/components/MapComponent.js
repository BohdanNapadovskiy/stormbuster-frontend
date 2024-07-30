import React, { useState, useEffect } from 'react';
import Map, { NavigationControl, Marker } from 'react-map-gl';
import mapboxglSupported from 'mapbox-gl-supported';


const MAPBOX_TOKEN = 'pk.eyJ1IjoibmFwYWRvdnNraWJvaGRhbiIsImEiOiJjbHo3NGx3cHUwNXJmMnFyM2MybXNjcjEyIn0.okOX0H6Z80cDrsknLbtZ9g'; // Replace with your Mapbox token

const MapComponent = () => {
    const [viewState, setViewState] = useState({
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
    });
    const [ncData, setNcData] = useState(null);

    const handleMove = (evt) => {
        const { longitude, latitude, zoom } = evt.viewState;
        console.log('X:', longitude, 'Y:', latitude, 'Zoom:', zoom);
        setViewState(evt.viewState);
    };


    useEffect(() => {
        const { longitude, latitude, zoom } = viewState;
        const z = Math.round(zoom);
        const x = Math.round(longitude);
        const y = Math.round(latitude);

        // Fetch data from backend
        fetch(`http://localhost:8080/api/tiles?fileName=your_file_name.nc&z=${z}&x=${x}&y=${y}`)
            .then(response => response.json())
            .then(data => {
                setNcData(data);
                // Process data as needed
                console.log('NC Data:', data);
            })
            .catch(error => console.error('Error fetching NC data:', error));
    }, [viewState]);

    if (!mapboxglSupported({ failIfMajorPerformanceCaveat: true })) {
        return <div>WebGL is not supported in this browser.</div>;
    }

    return (
        <Map
            {...viewState}
            onMove={handleMove}
            style={{ width: '100%', height: '100vh' }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
        >
            <NavigationControl />
            {/* You can use ncData to render layers or markers */}
            {ncData && (
                // Example: rendering a marker using the first data point
                <Marker longitude={viewState.longitude} latitude={viewState.latitude}>
                    <div style={{ backgroundColor: 'red', borderRadius: '50%', width: '10px', height: '10px' }}></div>
                </Marker>
            )}
        </Map>
    );
};

export default MapComponent;