"use client";
import { useState } from 'react';
import BanIcon from "@/app/components/ui/kids/BanIcon"
import CalendarIcon from '@/app/components/ui/kids/CalendarIcon';
import PhoneIcon from '@/app/components/ui/kids/PhoneIcon';
import UtensilsIcon from '@/app/components/ui/kids/UtensilsIcon';
import ExpandIcon from '@/app/components/ui/kids/ExpandIcon';
import { Input, Checkbox, Button } from '@/app/components/ui/kids/index';
import NavBar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from 'next/image';

export default function CampRegistration() {
      const [isChildAgeDropdownOpen, setIsChildAgeDropdownOpen] = useState(false);
      const [selectedChildAge, setSelectedChildAge] = useState('');
      const [isWeekDropdownOpen, setIsWeekDropdownOpen] = useState(false);
      const [selectedWeek, setSelectedWeek] = useState('');
    
      const toggleChildAgeDropdown = () => setIsChildAgeDropdownOpen(!isChildAgeDropdownOpen);
      const selectChildAge = (age:any) => {
        setSelectedChildAge(age);
        setIsChildAgeDropdownOpen(false);
      };
    
      const toggleWeekDropdown = () => setIsWeekDropdownOpen(!isWeekDropdownOpen);
      const selectWeek = (week:any) => {
        setSelectedWeek(week);
        setIsWeekDropdownOpen(false);
      };

  return (
    <>
      <NavBar />
      {/* <div className="max-w-6xl mx-auto">
  <Image
    src="/images/camp.png"
    alt="Camp image"
    width={800} // Original width of the image
    height={100} // Original height of the image
    layout="responsive" // This will make the image responsive
  />
</div> */}
      <div className="bg-white text-gray-900">
        <section className="max-w-8xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <BanIcon className="w-12 h-12 text-blue-600" />
              <h1 className="mt-4 text-3xl font-bold">2024 Badminton Spring Camp</h1>
              <p className="mt-2 text-lg font-semibold text-blue-700">REGISTRATION IS NOW OPEN!</p>
              <p className="mt-4">Full day camp <strong>9:00am-3:00pm</strong></p>
              <p className="mt-2">Learning focused sports camp! Great for beginners and intermediate students!</p>
              <p className="mt-2">
                Badminton camp is a great experience for children, as long as they have an interest in the sport and are willing to work hard to improve their skills.
              </p>
              <p className="mt-2 font-semibold">BADMINTON – MINUTES TO LEARN – A LIFETIME TO MASTER!</p>
              <div className="mt-6">
                <UtensilsIcon className="w-8 h-8 text-green-600" />
                <h2 className="mt-2 text-xl font-semibold">Hot Lunch Option</h2>
                <p className="mt-1">Short on time to make their lunches? We got you covered. Super kid friendly hot lunch!</p>
                <p className="mt-1">Hot lunch option available <strong>($12 daily)</strong></p>
                <p className="mt-1 italic">(spaghetti, hot dogs, chicken fingers etc.)</p>
              </div>
            </div>
            <div>
              <CalendarIcon className="w-12 h-12 text-red-600" />
              <h2 className="mt-4 text-xl font-semibold">Camp Details</h2>
              <div className="mt-4">
                <p><strong>Spring Camp 2024</strong></p>
                <p>Ages 8-14</p>
                <p><strong>$500 per week</strong> – Monday – Friday</p>
                <p>March 18 – 22</p>
                <p>March 25 – 29</p>
                <p>Max 16 students</p>
                <p className="mt-2">
                  <strong>$200 cancellation charge</strong> applies to cancellations made less than one week before camp start
                </p>
              </div>
              <div className="mt-6">
                <PhoneIcon className="w-8 h-8 text-blue-600" />
                <h2 className="mt-2 text-xl font-semibold">Enroll Now</h2>
                <p className="mt-1"><strong>$500 per week</strong></p>
                <p className="mt-1">Register early, spots will be limited</p>
                <p className="mt-1">Call us now at <strong>604-325-5128</strong></p>
                <p className="mt-4 text-red-700">February 10, 2024 – Online registration is currently disabled, please call to reserve your spot</p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-gray-100 p-6 rounded-md">
            <h2 className="text-xl font-semibold">Registration Form</h2>
            <form className="mt-4 grid grid-cols-1 gap-4">
              <Input placeholder="Your Name (required)" type="text" />
              <Input placeholder="Your Email (required)" type="email" />
              <Input placeholder="Your Phone (required)" type="tel" />
              <div onClick={toggleChildAgeDropdown} className="relative">
                <div className="flex justify-between items-center cursor-pointer">
                <span>{selectedChildAge || 'Child Age (required)'}</span>
                  <ExpandIcon className="inline ml-2" />
                </div>
                {isChildAgeDropdownOpen && (
                  <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded shadow">
                     <div className="p-2" onClick={() => selectChildAge('8')}>8</div>
                     <div className="p-2" onClick={() => selectChildAge('9')}>9</div>
                     <div className="p-2" onClick={() => selectChildAge('10')}>10</div>
                     <div className="p-2" onClick={() => selectChildAge('11')}>11</div>
                     <div className="p-2" onClick={() => selectChildAge('12')}>12</div>
                     <div className="p-2" onClick={() => selectChildAge('13')}>13</div>
                    {/* Add more items as needed */}
                  </div>
                )}
              </div>
              <div onClick={toggleWeekDropdown} className="relative">
                <div className="flex justify-between items-center cursor-pointer">
                <span>{selectedWeek || 'Choose Desired Week (required)'}</span>
                  <ExpandIcon className="inline ml-2" />
                </div>
                {isWeekDropdownOpen && (
                  <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded shadow">
                   <div className="p-2" onClick={() => selectWeek('March 18 – 22')}>March 18 – 22</div>
                    <div className="p-2" onClick={() => selectWeek('March 25 – 29')}>March 25 – 29</div>
                  </div>
                )}
              </div>
              <div className="flex items-center">
                <Checkbox id="hot-lunch" />
                <label className="ml-2" htmlFor="hot-lunch">Hot Lunch $12 per day (optional)</label>
              </div>
              <Button className="mt-4">Submit</Button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
