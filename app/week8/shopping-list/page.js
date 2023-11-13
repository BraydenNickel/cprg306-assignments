'use client';
import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import { useUserAuth } from "./_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import ItemsData from "./items.json";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [items, setItems] = useState(ItemsData);
    const [selectedItemName, setSelectedItemName] = useState(" ");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleSelectItem = (item) => {
        if (item.name) {
            const cleanedItemName = item.name.split(/,|[\uD83C-\uDBFF\uDC00-\uDFFF]|[\uD83E\uD83F][\uDDBB-\DDBD][\uDC2C-\uDC37]/)[0].trim();
            setSelectedItemName(cleanedItemName);
        }
    };

    console.log(selectedItemName);

  // Check if the user is not logged in and handle accordingly
  if (!user) {
    return <Redirect to="page.js/" />;
  }

  // Render the page content for logged-in users
return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-indigo-950">
        <div>
        <h1 className="text-4xl font-bold m-2 text-center text-purple-500">
            Week 8
        </h1>
            <div className="p-2">
                <NewItem onAddItem={handleAddItem} />
                <div className="flex">
                        <ItemList items={items} onItemSelect={handleSelectItem} /> {/* Pass onItemSelect prop */}
                        {selectedItemName && <MealIdeas ingredients={selectedItemName} />} {/* Render MealIdeas component */}
                </div>
            </div>
        </div>
    </main>
    );
}