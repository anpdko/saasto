import React from 'react'
import Footer from '../../components/Footer/Footer';
import Tracker from './components/Tracker';
import Analytics from './components/Analytics';
import Excellent from './components/Excellent';
import Navbar from '../../components/Navbar/Navbar';
import Header from './components/Header';


const Home = () => {
   return (
      <div>
         <Navbar />
         <Header />
         <Excellent />
         <Analytics />
         <Tracker />
         <Footer />
      </div>
   );
};
export default Home