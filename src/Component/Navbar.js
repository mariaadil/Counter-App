import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ setView }) => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold cursor-pointer" onClick={() => setView('home')}>
          <a href="#" className="hover:text-gray-300">Counter App</a>
        </div>
        <div className="space-x-4">
          <button onClick={() => setView('about')} className="btn-nav">
            <FontAwesomeIcon icon={faInfoCircle} />
          </button>
          <button onClick={() => setView('contact')} className="btn-nav">
            <FontAwesomeIcon icon={faEnvelope} /> 
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
