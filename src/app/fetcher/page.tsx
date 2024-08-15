'use client'
import React from 'react';
import useFetch from '@/hooks/fetcher/page';

const Fetcher = () => {
    const url = '/api/cryptocurrencies';
    const { loading, response, error } = useFetch({ url });
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error !! failed to fetch the url {url}</div>;
    console.log(response, JSON.stringify(response))
    return (
        <div>
            <p>Show response here {JSON.stringify(response)}</p>
        </div>
    );
};

export default Fetcher