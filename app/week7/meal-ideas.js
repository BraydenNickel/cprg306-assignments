import React, {useState, useEffect} from "react";

export default function MealIdeas([ ingredients ]) {
    const [meals, setMeals] = useState([]);

    // Define a function to fetch meal ideas from the API
    const fetchMealIdeas = async (ingredients) => {
        try{
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`);
            const data = await response.json();
            const mealData = data.meals;
            setMeals(data.meals);
        }catch(error){
            console.log('Error fetching meal ideas', error);
        }
    }

    
    // Define a function to load meal ideas
    // Use the useEffect hook to load meal ideas when ingredient prop changes
    useEffect(() => {
        const loadMealIdeas = () => {
            fetchMealIdeas(ingredients);
        };
        loadMealIdeas();
    }, [ingredients]);

    // Render components

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold m-2 text-center text-purple-500">
                Meal Ideas
            </h2>
            <div className="p-2">
                {meals.map((meal) => (
                    <meal key={meal.idMeal} meal={meal} />
                ))}
            </div>
        </div>
    );
}
