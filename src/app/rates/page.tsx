import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Table, TableHead, TableRow, TableHeader, TableCell, TableBody } from '@/app/components/ui/table';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer'; 

const Component: NextPage = () => {
  return (
    <>
      <div className="bg-black text-black"> 
        <Navbar />
        <div className="max-w-8xl mx-auto my-8 p-4 bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4">
            <Image
              alt="Badminton Court"
              className="w-full object-cover"
              src="/images/court.png"
              width={640}
              height={200}
              layout="intrinsic"
            />
            <h1 className="text-3xl font-bold uppercase text-[#bd1e59]">Badminton Vancouver</h1>
            <p className="text-sm text-gray-600">
              - 6 person limit per court - 36 hour cancellation policy - Busy times may be restricted to 2 hour bookings
            </p>
            <h2 className="text-2xl font-semibold">Price List Nov 1 2022</h2>
            {/* Table for peak and non-peak hours */}
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader className="w-1/2 text-center">Peak Hours</TableHeader>
                  <TableHeader className="w-1/2 text-center">Non-Peak Hours</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center">Monday to Friday 5PM-Close Weekends All Day</TableCell>
                  <TableCell className="text-center">Monday to Friday Open-5PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center font-bold text-lg">
                    $30 <span className="text-sm font-normal">per hour</span>
                  </TableCell>
                  <TableCell className="text-center font-bold text-lg">
                    $25 <span className="text-sm font-normal">per hour</span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center text-sm">6 person limit per court</TableCell>
                  <TableCell className="text-center text-sm">{''}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            {/* Additional information section */}
            <div className="w-full p-4 bg-[#bd1e59] text-black text-center">
              <h3 className="font-semibold">Value Packages</h3>
              <p className="text-xs">All packages expire 1 year from date of purchase</p>
            </div>
            {/* Table for value packages */}
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader className="w-1/2 text-center">Package Deals</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center">$540 for 20 hours ($27/hour)</TableCell>
                  <TableCell className="text-center">$420 for 20 hours ($21/hour)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">$290 for 10 hours ($29/hour)</TableCell>
                  <TableCell className="text-center">$230 for 10 hours ($23/hour)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Component;
