// utils/api.js
import axios from 'axios';

const API_BASE_URL = 'YOUR_API_ENDPOINT_HERE';

export const fetchData = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data; // Assuming your API returns an array of data
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Return an empty array in case of an error
  }
};

export const postData = async (data) => {
    try {
      const response = await axios.post(API_BASE_URL, data);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };