'use client';
import React, {useState} from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import ItemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(ItemsData);
    const [selectedItemName, setSelectedItemName] = useState(" ");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleSelectItem = (item) => {
        const cleanedItemName = item.name.split(',')[0].trim();
        setSelectedItemName(cleanedItemName);
    };


return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-indigo-950">
        <div>
        <h1 className="text-4xl font-bold m-2 text-center text-purple-500">
            Week 6
        </h1>
            <div className="p-2">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onSelectItem={handleSelectItem} />
            </div>
            <div className="p-2">
                <MealIdeas ingredients={selectedItemName}/>
            </div>
        </div>
    </main>
    );
}