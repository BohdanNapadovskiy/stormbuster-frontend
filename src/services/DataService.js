import axios from 'axios';

// Setup an Axios instance
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Use the API URL from environment variables
    headers: {
        'Content-Type': 'application/json'
    }
});

// Function to fetch data from the server
export const fetchNCData = async (filePath) => {
    try {
        const response = await apiClient.get(`/api/data`, { params: { filePath } });
        return response.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
};