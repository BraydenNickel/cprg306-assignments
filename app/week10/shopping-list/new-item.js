"use client";

import { useState  } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState("Produce");
    const [ItemCreated, setItemCreated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        //create a new item object
        const newItem = {
            name: name,
            quantity: quantity,
            category: category,
        };
        //send the object to the server
        console.log(newItem);

        onAddItem(newItem);
        setName("");
        setQuantity(1);
        setCategory("");
        // Alert the user that the item was created and display the item name quantity, and category
        alert("Item was added to the list\n" + "Item: " + newItem.name + "\n Quantity: " + newItem.quantity + "\n Category: " + newItem.category);

        setItemCreated(true);

        setName("");
        setQuantity("1");
        setCategory("Produce");

        setItemCreated(false);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <main>
          <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
            {ItemCreated && (
              <div className="absolute top-0 mt-8 text-2xl text-yellow-400">
                Item Created
              </div>
            )}
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
              <h1 className="text-2xl text-gray-800 font-bold mb-8">
                Create New Item
              </h1>
              <form onSubmit={handleSubmit}>
                <label className="block mb-4">
                  <span className="text-gray-800">Item Name:</span>
                  <input
                    required
                    placeholder="Item Name"
                    type="text"
                    onChange={handleNameChange}
                    value={name}
                    className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                  />
                </label>
    
                <label className="block mb-4">
                  <span className="text-gray-800">Quantity:</span>
                  <input
                    type="number"
                    required
                    min = "1"
                    max = "99"
                    onChange={handleQuantityChange}
                    value={quantity}
                    className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                  />
                </label>
    
                <label className="block mb-4 ">
                  <span className="text-gray-800">Category:</span>
                  <select
                    required
                    onChange={handleCategoryChange}
                    value={category}
                    // Create various option elements within the select for each possible category ("Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"). Each option should have a value that matches the category it represents 
                    className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white">
                      <option value disabled>Category</option>
                      <option value="Produce">Produce</option>
                      <option value="Dairy">Dairy</option>
                      <option value="Bakery">Bakery</option>
                      <option value="Meat">Meat</option>
                      <option value="Frozen Foods">Frozen Foods</option>
                      <option value="Canned Goods">Canned Goods</option>
                      <option value="Dry Goods">Dry Goods</option>
                      <option value="Beverages">Beverages</option>
                      <option value="Snacks">Snacks</option>
                      <option value="Household">Household</option>
                      <option value="Other">Other</option>
                    </select>
                </label>
    
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white"
                >
                  Create Item
                </button>
              </form>
            </div>
          </div>
        </main>
      );
}