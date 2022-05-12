import React from 'react';
import Home from './Home';
import UploadForm from './UploadForm';
const Navbar = () => {
  return (
    <div>
      <ul
        className='nav nav-tabs'
        style={{ paddingTop: '3px' }}
        id='myTab'
        role='tablist'
      >
        <li className='nav-item' role='presentation'>
          <button
            className='nav-link active'
            id='home-tab'
            data-bs-toggle='tab'
            data-bs-target='#home'
            type='button'
            role='tab'
            aria-controls='home'
            aria-selected='true'
          >
            Home
          </button>
        </li>
        <li className='nav-item' role='presentation'>
          <button
            className='nav-link'
            id='profile-tab'
            data-bs-toggle='tab'
            data-bs-target='#profile'
            type='button'
            role='tab'
            aria-controls='profile'
            aria-selected='false'
          >
            Manage Products
          </button>
        </li>
        <li className='nav-item' role='presentation'></li>
      </ul>
      <div className='tab-content' id='myTabContent'>
        <div
          className='tab-pane fade show active'
          id='home'
          role='tabpanel'
          aria-labelledby='home-tab'
        >
          <div>
            <Home />
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='profile'
          role='tabpanel'
          aria-labelledby='profile-tab'
        >
          <UploadForm />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
