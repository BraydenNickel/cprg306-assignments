import React from 'react';

export default function Items({ name, quantity, category, onSelect }) {
    return (
        <div
            className="border border-sky-500 bg-sky-800 w-full max-w-xs m-4 p-2"
            onClick={() => onSelect({ name, quantity, category })} // Pass the item data to onSelect
        >
            <h2 className="text-xl font-bold">{name}</h2>
            <p>{quantity}</p>
            <p>{category}</p>
        </div>
    );
}