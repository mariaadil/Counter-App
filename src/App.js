import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import Counter from './Component/Counter';
import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import './index.css';

const App = () => {
  const [view, setView] = useState('home');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setView={setView} />
      <div className="flex-grow flex items-center justify-center p-4">
        {view === 'home' && <Counter />}
        {view === 'about' && <About />}
        {view === 'contact' && <Contact />}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
