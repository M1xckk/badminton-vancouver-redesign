"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { Input, Textarea, Button } from "@/app/components/ui/input";

const ContactPage: React.FC = () => {
  const [isSelectOpen, setSelectOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const toggleDropdown = () => setSelectOpen(!isSelectOpen);

  const handleSelectItem = (value: string) => {
    setSelectedProgram(value);
    setSelectOpen(false);
  };

  return (
    <>
      <Navbar />
      <div style={{ position: 'relative', width: '100vw', height: '50vh' }}>
        {/* The Image component with layout="fill" will cover the entire parent div */}
        <Image
          src="/images/badminton.png"
          alt="Badminton courts"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="bg-black">
        <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Contact Information */}
            <div className="bg-white shadow rounded-lg p-6 space-y-4">
              <Image src="/images/map.png" alt="Badminton Vancouver" className="rounded-lg" width={900} height={300} objectFit="cover" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Badminton Vancouver</h3>
                <p className="text-sm text-gray-600">
                  The best place to play Badminton and make friends!
                </p>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">110-13100 Mitchell Road, Richmond BC, V6V 1M8</p>
                  <p className="text-sm text-gray-600">604-325-5128</p>
                  <p className="text-sm text-gray-600">Hours of Operation: 12pm – 10pm 7 Days</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow rounded-lg p-10">
              <h2 className="text-lg font-semibold text-gray-900">Get in Touch</h2>
              <form className="mt-10 grid grid-cols-1 gap-y-14">
                <Input placeholder="Your Name (required)" type="text" />
                <Input placeholder="Your Email (required)" type="email" />
                <Input placeholder="Your Phone (required)" type="tel" />

                {/* Custom Dropdown */}
                <div className="relative">
                  <div className="flex justify-between items-center border border-gray-300 rounded-md px-3 py-2 bg-white" onClick={toggleDropdown}>
                    <span>{selectedProgram || "Which program are you interested in?"}</span>
                    {/* Dropdown Icon */}
                    <span className="ml-2">&#x25BC;</span>
                  </div>
                  {isSelectOpen && (
                    <ul className="absolute z-10 border border-gray-300 rounded-md bg-white w-full mt-1">
                      <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelectItem('Adults Program')}>Adults Program</li>
                      <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelectItem('Juniors Program')}>Juniors Program</li>
                      <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelectItem('Private Coaching')}>Private Coaching</li>
                    </ul>
                  )}
                </div>

                <Textarea placeholder="Additional Comments" />
                <Button className="bg-blue-600 text-white w-full">Submit</Button>
              </form>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
