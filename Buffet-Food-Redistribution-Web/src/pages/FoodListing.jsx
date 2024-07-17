import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';



function FoodListing() {
  const [foodItems, setFoodItems] = useState([]);
  const [requestedItems, setRequestedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  //var response = axios.get('http://localhost:5282/api/FoodItem')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5282/api/FoodItem');
        setFoodItems(response.data);
        setLoading(false);
        //console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(foodItems);
  
  const token = localStorage.getItem('token'); 
  const handleRequest = (itemId) => {
    const selectedItem = foodItems.find(item => item.id === itemId);
    if (selectedItem) {
      
      //const api = `http://localhost:5282/api/Email/DonorMail?email=${selectedItem.contact}`
      const url = `http://localhost:5282/api/Email/DonorMail?email=${selectedItem.contact}&itemId=${selectedItem.id}`
      axios.post(url);

      axios.post(`http://localhost:5282/api/Request?foodDonationId=${selectedItem.id}`,{},{
        headers:{
          Authorization: `Bearer ${token}` 
        }
      });

      alert(`Request for ${selectedItem.itemName} sent!`);
      setRequestedItems([...requestedItems, selectedItem]);
    }
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <br></br>
      <h2 className="mt-5 mb-3 text-center">Available Donations</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2 mb-5">
        {foodItems.map((item) => (
          <div key={item.id} className="col">
            <div className={`card h-100 shadow rounded p-3 ${requestedItems.some(requestedItem => requestedItem.id === item.id) ? 'bg-light disabled' : ''}`}>
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{item.itemName}</h5>
                  <p className="card-text">
                    <strong>Quantity:</strong> {item.quantity}<br />
                    <strong>Description:</strong> {item.description}<br />
                    <strong>Time Cooked:</strong> {item.dateCooked}<br />
                    <strong>Address:</strong> {item.address}
                  </p>
                </div>
                <button onClick={() => handleRequest(item.id)} className="btn btn-primary mt-2 align-self-end" disabled={requestedItems.some(requestedItem => requestedItem.id === item.id)}>
                  {requestedItems.some(requestedItem => requestedItem.id === item.id) ? 'Requested' : <><FontAwesomeIcon icon={faUtensils} /> Request</>}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default (FoodListing);
