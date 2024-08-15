'use client'
import React from 'react';
import useLocalStorage from '@/hooks/localStorage/page';

const LocalStorage = () => {
    const { value, setValue } = useLocalStorage({ key: 'name', initialValue: 'ashok' });
    return (
        <div>
            <p>Stored value: {value}</p>
            <button onClick={() => setValue('123')}>
                Set new value
            </button>
        </div>
    );
};

export default LocalStorage;