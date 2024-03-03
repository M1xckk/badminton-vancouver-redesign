import React from 'react';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="relative h-screen w-full">
        <Image
          alt="Vancouver's World-Class Badminton Facility"
          className="h-full w-full object-cover"
          src="/images/home.png"
          layout="fill" 
          objectFit="cover" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-6xl font-bold text-center">Vancouver World-Class Badminton Facility</h1>
        </div>
      </div>
      <div className="container mx-auto">
      </div>
      
      <Footer />
    </>
  );
};

export default Home;
