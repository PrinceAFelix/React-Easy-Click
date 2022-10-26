import React, { useState } from "react";
import nextId from "react-id-generator";




const availableFood = [
    {
        id: nextId(),
        food: "Sushi",
        description: "Salmon roll and spicy salmon",
        price: 18.09
    },
    {
        id: nextId(),
        food: "Tonkotsu Black Ramen",
        description: "Chashu, black fungus, egg, green onion, and black garlic oil",
        price: 19.00
    },
    {
        id: nextId(),
        food: "Miso Black Ramen",
        description: "Chashu, spicy kakuni, egg, shitake mushroom, and japanese black garlic oil",
        price: 21.00
    },
    {
        id: nextId(),
        food: "Tonkotsu Ramen",
        description: "Chashu, black fungus, egg, and green onion",
        price: 18.50
    },
    {
        id: nextId(),
        food: "Shoyu Ramen",
        description: "Chashu, egg, bamboo shoot, and green onion",
        price: 17.00
    },
];


const FoodContext = React.createContext({
    foodList: [{}],
});


export const FoodContextProvider = (props) => {

    const [list, setList] = useState(availableFood);

    return <FoodContext.Provider value={{ foodList: list }}>{props.children}</FoodContext.Provider>
}

export default FoodContext;
