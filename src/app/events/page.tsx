import React from 'react';
import Input from '@/app/components/ui/events/Input';
import Textarea from '@/app/components/ui/events/Textarea'; 
import Button from '@/app/components/ui/events/Button'; 
import Navbar from '@/app/components/Navbar'; 
import Footer from '@/app/components/Footer'; 
import Image from 'next/image';

const CorporateEventPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
        <div className="container max-auto mx-auto py-10 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Image
                  alt="Badminton courts"
                  className="rounded-md"
                  src="/images/anna1.png"
                  layout="responsive"
                  width={400}
                  height={300}
                  quality= {100}
                />
                <Image
                  alt="Viewing gallery"
                  className="rounded-md"
                  src="/images/anna3.png"
                  layout="responsive"
                  width={400}
                  height={300}
                  quality= {100}
                />
              </div>
              <div className="text-center font-bold text-xl mb-4">CORPORATE EVENTS WITH ANNA</div>
              <p className="mb-4">
                Team Building with Anna – Two hours of guided practice with two-time Canadian Badminton Olympian Anna
                Rice. Your group will learn the 5 fundamental swings as well as some of the basic footwork movements. Game
                play will follow, and the session concludes with a motivational talk guaranteed to inspire.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
              <Image
                  alt="Anna coaching"
                  className="rounded-md"
                  src="/images/anna.png"
                  layout="responsive"
                  width={300}
                  height={200}
                  quality= {100}
                />
                <Image
                  alt="Anna playing"
                  className="rounded-md"
                  src="/images/anna2.png"
                  layout="responsive"
                  width={300}
                  height={200}
                  quality= {100}
                />
              </div>
              <div className="text-center font-bold text-xl mb-4">
                PRICE: $1,300. FOR UP TO 20 PEOPLE, ALL EQUIPMENT INCLUDED.
              </div>
              <p className="text-sm mb-4">(ADDITIONAL PARTICIPANTS: $65/PER PERSON).</p>
              <p className="mb-4">
                Anna Rice is a 5-time National Champion and represented Canada for over 12 years at such events as the Pan
                Am Games, the Commonwealth Games, Several World Champs and two Olympics (04/08).
              </p>
              <p className="mb-4">
                At the 2008 Beijing Olympics, Anna placed 9th overall in the women singles event, a record breaking
                performance for a female singles player from North America. While continuing with her professional
                badminton career, now working as a coach, Anna strives to use her success on the court to help promote the
                sport of badminton in North America.
              </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-lg">
              <div className="text-center font-bold text-xl mb-8">Corporate Event Registration</div>
              <form className="grid grid-cols-1 gap-10">
                <Input placeholder="Your Name (required)" type="text" />
                <Input placeholder="Your Email (required)" type="email" />
                <Input placeholder="Your Phone (required)" type="tel" />
                <Input placeholder="Desired # of Participants (required)" type="number" />
                  <Input placeholder="gender (required)" type="text" />
                <Textarea placeholder="Details about your event (required)" />
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CorporateEventPage;
