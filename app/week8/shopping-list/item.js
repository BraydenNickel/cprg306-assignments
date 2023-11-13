import React from 'react';

export default function Items( { items, onSelect }) {
    return (
        <div className ="" onClick={() => onSelect(items)}>
            <h2>Item: {items.name}</h2> 
            <p>Quantity: {items.quantity}</p>
            <p>Category: {items.category}</p>
        </div>
    );
}