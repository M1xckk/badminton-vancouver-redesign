"use client";
import { FC} from 'react';
import Image from 'next/image';
import { Input } from '@/app/components/ui/input';
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from '@/app/components/ui/pickleball';
import  Button  from '@/app/components/ui/pickleball/Button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PickleballCampPage: FC = () => {
  return (
      <>
      <Navbar />
    <div className="bg-white text-gray-800">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mx-auto mb-5" style={{ width: '600px', height: '300px', position: 'relative' }}>
              <Image
                alt="Pickleball"
                src="/images/pickleball.png"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1 className="text-3xl font-bold mb-2">Kids Pickleball Camp</h1>
            <h2 className="text-xl font-semibold mb-4">Registration is Here!</h2>
            <p className="text-lg mb-2">
              Half day camp <span className="font-semibold">12:30pm-3:30pm</span>
            </p>
            <p className="text-lg mb-4">First time being offered in Vancouver!!!</p>
            <p className="mb-4">
              A sport for all ages and skill levels, it’s a combination of tennis, badminton, and ping pong. It’s easy
              for beginners to learn, and for experienced players, it can be a highly competitive, quick, and strategic
              game. And above all, it’s fun!
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              {/* <CalendarIcon className="text-blue-600" /> */}
              <h3 className="text-2xl font-semibold">Instructor Mona Lee</h3>
              {/* <PopsicleIcon className="text-green-600" /> */}
            </div>
            <p className="mb-2">
              International Pickleball Teaching Professional Association (IPTPA) Certified Instructor &amp; Former
              Vancouver Pickleball Association President
            </p>
            <p className="font-bold mb-2">Pickleball Summer Camp 2021</p>
            <p className="mb-2">$250 per week</p>
            <p className="mb-4">Ages 8 – 14 years old</p>
            <p className="mb-6">MAX 16 STUDENTS</p>
            <form className="grid grid-cols-1 gap-4">
              <Input placeholder="Your Name (required)" type="text" />
              <Input placeholder="Your Email (required)" type="email" />
              <Input placeholder="Your Phone (required)" type="tel" />
              <Input placeholder="Child's Age (required)" type="number" />
              <Select>
                <SelectTrigger id="week" isOpen={false} setIsOpen={() => {}}>
                  <SelectValue placeholder="Choose Desired Week (required)" />
                </SelectTrigger>
                <SelectContent isOpen={false} position="popper">
                  <SelectItem value="week1">Week 1</SelectItem>
                  <SelectItem value="week2">Week 2</SelectItem>
                  <SelectItem value="week3">Week 3</SelectItem>
                  <SelectItem value="week4">Week 4</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
      </>
  );
};


// const CalendarIcon: FC<SVGProps<SVGElement>> = (props) => {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       ref={props.ref as React.Ref<SVGSVGElement>}
//     >
//       <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
//       <line x1="16" x2="16" y1="2" y2="6" />
//       <line x1="8" x2="8" y1="2" y2="6" />
//       <line x1="3" x2="21" y1="10" y2="10" />
//     </svg>
//   );
// };

// const PopsicleIcon: FC<SVGProps<SVGElement>> = (props) => {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       ref={props.ref as React.Ref<SVGSVGElement>}
//     >
//       <path d="M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z" />
//       <path d="m22 22-5.5-5.5" />
//     </svg>
//   );
// };


export default PickleballCampPage;
