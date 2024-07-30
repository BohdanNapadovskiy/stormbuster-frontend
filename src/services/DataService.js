import axios from 'axios';

// Setup an Axios instance
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Use the API URL from environment variables
    headers: {
        'Content-Type': 'application/json'
    }
});

// Function to fetch data from the server
export const fetchNCData = async (filePath, zoom, x, y) => {
    try {
        const endpoint = `api/tiles/${filePath}/${zoom}/${x}/${y}.png`;
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
};