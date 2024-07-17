import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import FoodForm from './FoodForm';
// import Home from './pages/Home';
import Historys from './Historys';
import Donordashboard from '../Dashboard/Donordashboard';
// import UserProfile from '../Dashboard/UserProfile';
import ProfileApp from '../Dashboard/profileApp';


const RoutesComponent = () => {
    const [foodItems, setFoodItems] = useState([]);

    // Function to add a new food item to the menu
    const addFoodItem = (itemName, itemQuantity, itemDescription, itemtimeCooked) => {
        const newItem = { name: itemName, quantity: itemQuantity, description: itemDescription, timeCooked: itemtimeCooked };
        setFoodItems([...foodItems, newItem]);
        // Optionally, you can display a success message here
        console.log("Added food item:", newItem);
    };

    return (
        <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/foodform' element={<FoodForm addFoodItem={addFoodItem} />} />
            <Route path='/historys' element={<Historys foodItems={foodItems} />} />
            <Route path ='/donordashboard' element={<Donordashboard/>}/> 
            <Route path ='/ProfileApp' element={<ProfileApp/>}/> 
        </Routes>
    );
};

export default RoutesComponent;
