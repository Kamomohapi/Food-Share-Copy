

// Function to remove existing token
export const removeToken = () => {
    localStorage.removeItem('token');
};

// Function to set a new token
export const setToken = (newToken) => {
    localStorage.setItem('token', newToken);
};

// Example usage in your application initialization or authentication flow
export const initializeApp = () => {
    const existingToken = localStorage.getItem('token');

    if (existingToken) {
        // If there's an existing token and you want to remove it
        removeToken();
    }

    // Assume you fetch a new token from an API or generate one
    const newToken = 'your_new_token_here'; // Replace with your logic to get a new token

    // Set the new token in localStorage
    setToken(newToken);

    // Now localStorage will have the new token stored under 'token'
};