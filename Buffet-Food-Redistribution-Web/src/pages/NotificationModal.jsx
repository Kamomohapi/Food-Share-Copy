import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const NotificationModal = ({ show, handleClose, itemName }) => {
  const [requesterName, setRequesterName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequesterName = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5282/api/Recipient/Profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        setRequesterName(response.data.RecipientName); // Assuming response.data contains the requester's name
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (!show) {
      fetchRequesterName();
    }
  }, [show]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Pending Donation Request</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <p>{requesterName} has made a request for {itemName}.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NotificationModal;