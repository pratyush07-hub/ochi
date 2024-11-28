import React from 'react' // rfce
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Markwa from './components/Markwa';
import About from './components/About';
import Eye from './components/Eye';
import Featured from './components/Featured';

import Hooter from './components/Hooter';
import LocomotiveScroll from 'locomotive-scroll';


function App() {

const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className="w-full min-h-screen bg-[#F1F1F1]">
      <Navbar />
      <LandingPage />
      <Markwa />
      <About />
      <Eye />
      <Featured />
      
      <Hooter />
    </div>
  )
}

export default App;

