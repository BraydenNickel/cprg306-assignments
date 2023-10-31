import React, { useState} from "react";
import Items from "./item.js";
import EventCard from "../week3/event-card";

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");
  
  items = items.sort((a, b) => {
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
      <>
        <div className="flex flex-col items-center justify-between">
          <div className="mb-4 flex items-center">
              <h3 className="text-lg font-bold mb-2 mr-2">
                  Sort By:
              </h3>
              <button
                  onClick={() => handleSort("name")}
                  className={`px-4 py-2 ${sortBy === "name" ? "bg-blue-400" : "bg-blue-200"} active:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300`}
                >
              Name
          </button>
          <button
              onClick={() => handleSort("category")}
              className={`px-4 py-2 ${sortBy === "name" ? "bg-blue-200" : "bg-blue-400"} active:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300`}
          >
              Category
          </button>
      </div><h1 className="text-4xl font-bold m-5 text-center text-purple-500">
          </h1>
          <div>
              {items.map((items) => (
                <><EventCard
                      name={items.name}
                      quantity={items.quantity}
                      category={items.category} />
                </>
              ))}
          </div>
        </div>
    </>  
     );
  }
  