import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <footer className="bg-gray-800 text-white py-6 cursor-pointer" onClick={handleClick}>
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Counter App. All rights reserved.</p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showMessage ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-300 text-sm mt-2"
        >
          Empower your day with the 2024 Counter App, your go-to companion for effortless tracking and goal achievement. From steps taken to tasks completed, our intuitive app simplifies your journey to success. With us, every count matters. © 2024 Counter App. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
