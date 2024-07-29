import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const MapView = ({ data }) => {
    const [viewport, setViewport] = useState({
        latitude: 37.785164, // Default latitude
        longitude: -122.441696, // Default longitude
        zoom: 10,
        width: "100%",
        height: "500px"
    });

    return (
        <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={setViewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
            {/* Assuming data includes latitude and longitude */}
            {data && (
                <Marker latitude={data.latitude} longitude={data.longitude}>
                    <div style={{ color: 'white', backgroundColor: 'blue', padding: '5px' }}>
                        {data.name} {/* Example: name from your data */}
                    </div>
                </Marker>
            )}
        </ReactMapGL>
    );
};

export default MapView;