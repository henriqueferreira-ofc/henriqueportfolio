// Define the base URL for your backend (adjust port as needed)
const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'; // Default to 3000 for NestJS

export const httpGet = async <T = unknown>(url: string): Promise<T> => {
  try {
    // Construct the full URL
    const fullUrl = url.startsWith('http') ? url : `${baseURL}/${url.replace(/^\/+/, '')}`;
    console.log(`Fetching from: ${fullUrl}`); // Debug log

    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error; // Re-throw to let the caller handle it
  }
};