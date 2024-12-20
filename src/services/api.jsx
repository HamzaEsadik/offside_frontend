const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    
    if (!response.ok) {
      throw new Error(`Failed to get data: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
  }
};
