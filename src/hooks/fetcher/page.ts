import React, { useEffect, useReducer, useState } from 'react';

// Define the action type
interface Action {
    type: 'Success' | 'Error' | 'Loading';
    response?: any; // You can replace 'any' with a more specific type if known
    error?: string; // Optional error message
}


function reducer(state: any, { type, response, error }: Action) {
    switch (type) {
        case "Success":
            return { loading: false, response, error: null };
        case "Error":
            return { loading: false, response: null, error };
        case 'Loading':
            return { ...state, loading: true };
        default:
            throw new Error(`Unknown error occurred`);
    }
    return state;
}

const useFetch = ({ url }: { url: string }) => {
    // const [state, dispatch] = useReducer(reducer, {
    //     response: null,
    //     error: null,
    //     loading: false
    // })
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        // const fetchUrl = async (url: string, { signal: any }) => 
        {
            setLoading(true);
            fetch(url)
                .then(response => response.json())
                .then(data => setResponse(data))
                .catch((error: any) => setError(error))
                .finally(() => setLoading(false));

            // return () => { controller.abort(); }
        }
    }, [url]);
    return { response, loading, error };
};

export default useFetch;