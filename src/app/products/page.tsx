import React from 'react';
import { createRoot } from 'react-dom/client';

const Product = props => {
    const plus = () => {
        // Call props.onVote to increase the vote count for this product
    };
    const minus = () => {
        // Call props.onVote to decrease the vote count for this product
    };
    return (
        <li>
            <span>{/* Product name */}</span> - <span>votes: {/* Number of votes*/}</span>
            <button onClick={plus}>+</button>{" "}
            <button onClick={minus}>-</button>
        </li>
    );
};
