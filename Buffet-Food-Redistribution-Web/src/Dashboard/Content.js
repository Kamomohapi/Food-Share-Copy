
import React from 'react';
import ProfileApp from './profileApp'; // Corrected import statement
import UserProfile from './UserProfile'; // Added import statement
import Historie from './Historie';
import FoodForm from '../Landing-page/FoodForm';
import FoodListingApp from '../pages/FoodListingApp';

const Content = ({ page }) => {
  return (
    <div className="content pt-2">
      {page === 'Home' && (
        <div>
          <h1>Welcome to the Home Page!</h1>
          <p>This is the homepage content.</p>
        </div>
      )}
      {page === 'about' && (
        <div>
          <h1>About Us</h1>
          <p>Learn more about our company and mission here.</p>
          <p>Learn more about our company and mission here.</p>
        </div>
      )}
      {page === 'contact' && (
        <div>
          <h1>Contact Us</h1>
          <p>Get in touch with us through our contact information.</p>
        </div>
      )}
      {page === 'profileApp' && (
        <div className=''>
          <ProfileApp /> {/* Display the ProfileApp component */}
        </div>
      )}

      {page === 'histories' && (
        <div className=''>
          <Historie />
        </div>
      )}
      {page === 'FoodForm' && (
        <div className=''>
          <FoodForm />
        </div>
      )}
      {page === 'FoodListingApp' && (
        <div className=''>
          <FoodListingApp />
        </div>
      )}
      {page === 'userProfile' && (
        <div className=''>
          <UserProfile userData={{ // Pass sample user data
            name: 'John Doe',
            email: 'john@example.com',
            telephone: '123-456-7890',
            address: '123 Main St',
            password: 'password123'
          }} />
        </div>
      )}


    </div>
  );
};

export default Content;
