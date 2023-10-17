import React from 'react';

export default function Items( { items }) {
    return (
        <div className ="" >
            <h2>Item: {items.name}</h2> 
            <p>Quantity: {items.quantity}</p>
            <p>Category: {items.category}</p>
        </div>
    );
}