'use client';
import React, {useState, useEffect} from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { GetItems, AddItem } from "./_services/shopping-list-service";

export default function Page() {
    const [items, setItems] = useState(ItemsData);
    const [selectedItemName, setSelectedItemName] = useState(" ");

    //Load items from Firestone
    /* 
    Create an async function loadItems. Inside this function, call the getItems function to get the shopping list items for the current user using user.uid as the userId. Use setItems to set the state of items to the result of getItems.
    */
    useEffect(() => {
        const loadItems = async () => {
            try {
                const items = await GetItems(user.uid);
                setItems(items);
            }
            catch (error) {
                console.log("Error loading items from database", error);
            }
        };
        loadItems();
    }, []);
            

    // Function to handle adding new items
    const handleAddItem = async (newItem) => {
    try {
      const newItemData = await AddItem(user.uid, newItem);
      setItems([...items, newItemData]);
    } catch (error) {
        console.log("Error adding new item", error);
        }
    }


    const handleSelectItem = (item) => {
        if (item.name) {
            const cleanedItemName = item.name.split(/,|[\uD83C-\uDBFF\uDC00-\uDFFF]|[\uD83E\uD83F][\uDDBB-\DDBD][\uDC2C-\uDC37]/)[0].trim();
            setSelectedItemName(cleanedItemName);
        }
    };

    console.log(selectedItemName);

  // Render the page content for logged-in users
return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-indigo-950">
        <div>
        <h1 className="text-4xl font-bold m-2 text-center text-purple-500">
            Week 10
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