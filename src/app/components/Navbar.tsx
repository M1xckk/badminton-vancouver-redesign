import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
      return (
            <nav className="bg-black text-white p-4">
              <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                  <div className="cursor-pointer">
                    <Image
                      src="/images/logo.png" 
                      alt="badminton Vancouver" 
                      width={100} 
                      height={50} 
                      layout="fixed" 
                    />
                  </div>
                </Link>
                <div className="flex space-x-4">
          <Link href="/rates" legacyBehavior>
          <a className="focus:text-blue-500 active:text-blue-500">RATES</a>
          </Link>
          <Link href="/about" legacyBehavior>
          <a className="focus:text-blue-500 active:text-blue-500">ABOUT</a>
          </Link>
              <Link href="/lessons" legacyBehavior>
              <a className="focus:text-blue-500 active:text-blue-500">LESSONS</a>
                  </Link>
                  <Link href="/kid-camp" legacyBehavior>
                  <a className="focus:text-blue-500 active:text-blue-500">KIDS CAMPS</a>
                  </Link>
                  <Link href="/events" legacyBehavior>
                  <a className="focus:text-blue-500 active:text-blue-500">CORPORATE EVENTS</a>
                  </Link>
                  <Link href="/kid-pickleball" legacyBehavior>
                  <a className="focus:text-blue-500 active:text-blue-500">KIDS PICKLEBALL</a>
                  </Link>
                  

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
