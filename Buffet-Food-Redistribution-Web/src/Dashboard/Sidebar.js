import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHistory, faHourglassEnd, faUser, faToolbox, faQuestionCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import FoodForm from '../Landing-page/FoodForm';
const Sidebar = ({ onSelect }) => {
  return (
    <div className="sidebar d-flex flex-column bg-dark text-light p-4 pt-5">
      <h3 className='text-light'>User Dashboard</h3>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link onClick={() => onSelect('Home')} className="font-weight-bold text-light">
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          {' '}
          Home
        </Nav.Link>

        <Nav.Link onClick={() => onSelect('profileApp')} className="font-weight-bold text-light">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          {' '}
          User Profile
        </Nav.Link>

        <Nav.Link onClick={() => onSelect('histories')} className="font-weight-bold text-light">
          <FontAwesomeIcon icon={faHistory} className="mr-2" />
          {' '}
          Donation History
        </Nav.Link>

        <Nav.Link onClick={() => onSelect('FoodForm')} className="font-weight-bold text-light">
          <FontAwesomeIcon icon={faHourglassEnd} className="mr-2" />
          {' '}
          Pending Request
        </Nav.Link>

        <Nav.Link onClick={() => onSelect('faq')} className="font-weight-bold text-light">
          <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
          {' '}
          FAQ
        </Nav.Link>

        <Nav.Link onClick={() => onSelect('testimonial')} className="font-weight-bold text-light">
          <FontAwesomeIcon icon={faToolbox} className="mr-2" />
          {' '}
          Food Listing
        </Nav.Link>

        <div className="flex-grow-1"></div> {/* Flex grow to occupy remaining space */}

        <Nav.Link onClick={() => onSelect('logout')} className="font-weight-bold text-light mt-auto">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          {' '}
          Logout
        </Nav.Link>
      </Nav>
    </div>
  )
}

export default Sidebar;
