import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Form, Button, InputGroup } from 'react-bootstrap';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUtensils, FaSortNumericUp, FaClipboard, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';


function FoodForm() {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [timeCooked, setTimeCooked] = useState('');
  const [address, setAddress] = useState('');
  const [contact,setContact] = useState();

 const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentTime = new Date();
    const timeDifference = Math.abs(currentTime - new Date(timeCooked)) / 36e5;

    if (
      itemName.trim() &&
      itemQuantity.trim() &&
      itemQuantity >= 0 &&
      itemDescription.trim() &&
      (typeof timeCooked === 'string' ? timeCooked.trim() : timeCooked) &&
      timeCooked &&
      address.trim() &&
      timeDifference < 12
    ) {
      try {
        const apiUrl = `http://localhost:5282/api/FoodDonation/populate`;
        const data = {
          ItemName: itemName,
          Quantity: itemQuantity,
          Description: itemDescription,
          DateCooked: timeCooked,
          Address: address,
          Contact:contact
        };
        const response = await axios.post(apiUrl, data,{
          headers:{Authorization: `Bearer ${token}`}
        });

        if (response.status === 200) {
          // Save to local storage with a timestamp
          const updatedFoodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
          updatedFoodItems.push({ name: itemName, quantity: itemQuantity, description: itemDescription, timeCooked: timeCooked, address: address, addedAt: new Date() });
          localStorage.setItem('foodItems', JSON.stringify(updatedFoodItems));
          
          setItemName('');
          setItemQuantity('');
          setItemDescription('');
          setTimeCooked('');
          setAddress('');

          toast.success('Food item added successfully!');
        } else {
          toast.error('Error adding food item. Please try again later.');
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('Network error. Please check your internet connection.');
      }
    } else if (timeDifference >= 12) {
      toast.error('Unfortunately, you cannot donate food that was prepared 12 or more hours ago!');
    } else {
      toast.error('Please fill out all fields correctly.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'rgba(211,211,211,0.5)', padding: '20px' }}>
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <div className="text-center" style={{ backgroundColor: 'grey', padding: '20px', borderRadius: '10px' }}>
          <h2>Donation</h2>
          <Form onSubmit={handleSubmit} className="mt-4">
            <Form.Group controlId="foodType" className="mb-3">
              <Form.Label><strong>Food Type</strong></Form.Label>
              <InputGroup className="border rounded">
                <InputGroup.Text><FaUtensils /></InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter food type"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  style={{ color: 'rgba(0, 0, 0, 1.5)' }}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="quantity" className="mb-3">
              <Form.Label><strong>Quantity</strong></Form.Label>
              <InputGroup className="border rounded">
                <InputGroup.Text><FaSortNumericUp /></InputGroup.Text>
                <Form.Control
                  type="number"
                  placeholder="Enter quantity"
                  value={itemQuantity}
                  onChange={(e) => setItemQuantity(e.target.value)}
                  min="0"
                  style={{ color: 'rgba(0, 0, 0, 1.5)' }}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="description" className="mb-3">
              <Form.Label><strong>Description</strong></Form.Label>
              <InputGroup className="border rounded">
                <InputGroup.Text><FaClipboard /></InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter food description"
                  value={itemDescription}
                  onChange={(e) => setItemDescription(e.target.value)}
                  style={{ color: 'rgba(0, 0, 0, 1.5)' }}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="timeCooked" className="mb-3">
              <Form.Label><strong>Time Cooked</strong></Form.Label>
              <InputGroup className="border rounded">
                <InputGroup.Text><FaClock /></InputGroup.Text>
                <Form.Control
                  as={Datetime}
                  value={timeCooked}
                  onChange={(date) => setTimeCooked(date)}
                  dateFormat="DD-MM-YYYY"
                  timeFormat="HH:mm"
                  inputProps={{
                    placeholder: 'Enter time cooked', 
                    style: { color: 'rgba(0, 0, 0, 1.5)' } 
                  }}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="address" className="mb-3">
              <Form.Label><strong>Physical Address</strong></Form.Label>
              <InputGroup className="border rounded">
                <InputGroup.Text><FaMapMarkerAlt /></InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={{ color: 'rgba(0, 0, 0, 1.5)' }}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="address" className="mb-3">
              <Form.Label><strong>Contact Information</strong></Form.Label>
              <InputGroup className="border rounded">
                <InputGroup.Text><FaMapMarkerAlt /></InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter your contact information"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  style={{ color: 'rgba(0, 0, 0, 1.5)' }}
                />
              </InputGroup>
            </Form.Group>
            <Button type="submit" variant="dark" className="mt-3 btn-block btn-lg" style={{ width: '100%' }}>Add Item</Button>
          </Form>
          <Link to="/historys" className="btn btn-primary mt-3">View Donations</Link>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default FoodForm;
