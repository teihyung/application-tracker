export const apiHandler = async (endpoint: string, method: string = 'GET', body: any = null) => {
    try {
        const response = await fetch(`${process.env.SERVER_URL}${endpoint}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: body ? JSON.stringify(body) : null,  // Only add body if provided
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong!');
        }

        return data;  // Return the data from the API response
    } catch (error) {
        if (error instanceof Error) {
            console.error('API request failed:', error.message);
            return { error: error.message };
        } else {
            console.error('API request failed:', error);
            return { error: 'Unknown error occurred' };
        }
    }
};
