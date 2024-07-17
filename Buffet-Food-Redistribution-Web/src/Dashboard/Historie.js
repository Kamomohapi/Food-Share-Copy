import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Historie() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    // Retrieve food items from local storage
    const storedFoodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
    setFoodItems(storedFoodItems);
  }, []);

  // Function to format time to hh:mm
  const formatTime = (time) => {
    const date = new Date(time);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // Function to format date
  const formatDate = (date) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Function to render each food item
  const renderFoodItems = () => {
    const handleRemove = (index) => {
      const updatedFoodItems = [...foodItems];
      updatedFoodItems.splice(index, 1);
      setFoodItems(updatedFoodItems);
      localStorage.setItem('foodItems', JSON.stringify(updatedFoodItems));
      toast.success('Donation removed successfully!');
    };

    return foodItems.map((item, index) => {
      return (
        <li key={index} className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center mt-2">
          <div className="flex-grow-1">
            <div>{item.name}, {item.quantity}, {item.description}</div>
            <div>Time cooked {formatTime(item.timeCooked)}, {formatDate(item.timeCooked)}</div>
            <div>{item.address}</div>
          </div>
          {item.image && (
            <div className="mt-3 mt-md-0 ml-md-3">
              <img src={item.image} alt="Food" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          )}
          <button className="btn btn-danger mt-3 mt-md-0 ml-md-3" onClick={() => handleRemove(index)}>Remove</button>
        </li>
      );
    });
  };

  return (
    <div className="container mt-2">
      <ul className="list-group">{renderFoodItems()}</ul>
      <Link to="/foodform" className="btn btn-primary mt-3">Add More</Link>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default Historie;
