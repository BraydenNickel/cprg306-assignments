"use client";

import { useState } from "react";
import Items from "./item.js";
import itemsData from "./items.json";
import EventCard from "../week3/event-card.js";


export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = itemsData.map((item) => item);

sortedItems = sortedItems.sort((a, b) => {
    if (sortBy === "name") {
        return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
    }
});

const handleSort = (newSort) => {
    setSortBy(newSort);
}
return (
    <div>
        <div>
            <h3>
                Sort By:
            </h3>
            <button
                onClick={() => handleSort("name")}
                style={{backgroundColor: sortBy === "name" ? "purple" : "black"}}
            >
                Name
            </button> 
            <button
                onClick={() => handleSort("category")}
                style={{ backgroundColor: sortBy === "category" ? "purple" : "black"}}
            >
              Category
            </button> 
        </div>
        <h1 className="text-4xl font-bold m-5 text-center text-purple-500">
                Week 5
        </h1>
        <div>
            {sortedItems.map((items) => (
                <><EventCard
                    name={items.name}
                    quantity={items.quantity}
                    category={items.category} />
                </>
            ))}
        </div>
 
    </div>
   );
}
