import { NextPage } from 'next';
import { Button } from "@/app/components/ui/Button";
import NavBar from "@/app/components/Navbar"; 
import Footer from "@/app/components/Footer";
import Image from "next/image";

const BadmintonLessonsPage: NextPage = () => {
  return (
    <>
    <NavBar />
    <div className="bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Image
              alt="Badminton court"
              className="rounded-lg object-cover"
              src="/images/group.png"
              layout="responsive"
              width={300}
              height={200}
            />
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-900">Group Lessons</h2>
              <p className="text-sm text-gray-600">
                Badminton Vancouver offers an array of badminton classes for all ages and abilities. Led by two-time Olympian turned coach Anna Rice, our team of professional badminton instructors will help you improve your game.
              </p>
              <p className="text-sm text-gray-600">10 week training term.</p>
              <p className="text-sm text-gray-600">
                If you do not see a class that suits your schedule for alternative options, please get in contact.
              </p>
              <Button variant="secondary">PRIVATE LESSONS ALSO AVAILABLE</Button>
              <p className="text-sm text-gray-600">
                Group lessons are a great way to learn badminton fundamentals while making new friends. Each session focuses on a specific aspect of the game, ensuring comprehensive skill development.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <Image
              alt="Kids playing badminton"
              className="rounded-lg object-cover"
              src="/images/kids.png"
              layout="responsive"
              width={300}
              height={200}
            />
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-900">Kid Lessons</h2>
              <div className="bg-green-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800">SPRING 2024 CLASS BEGINS JANUARY 27</h3>
                <p className="mt-2 text-sm text-green-700">
                  Book a 100% FREE badminton skills assessment to determine skill level (approximately 15 minutes) Call now to reserve!
                </p>
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-base font-medium text-gray-900">Kids (8-12yrs/old)</h4>
                  <span className="text-lg font-semibold text-gray-900">$400</span>
                </div>
                <p className="text-sm text-gray-600">Intermediate Level</p>
                <p className="text-sm text-gray-600">Sat, 11:00am-12:30pm</p>
              </div>
              <p className="text-sm text-gray-600">
                Our kid lessons are designed to instill a love for badminton while improving physical fitness and coordination. Classes are fun, engaging, and suitable for children of all skill levels.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <Image
              alt="Adults in badminton lounge"
              className="rounded-lg object-cover"
              src="/images/adult.png"
              layout="responsive"
              width={300}
              height={200}
            />
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-900">Adult Lessons</h2>
              <p className="text-sm text-gray-600">
                Take your game to the next level! Best way to get fit! Year round sport!
              </p>
              <div className="space-y-1">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-base font-medium text-gray-900">Advanced with Anna Rice</h4>
                  <span className="text-lg font-semibold text-gray-900">$600</span>
                </div>
                <p className="text-sm text-gray-600">(13+yrs/old)</p>
                <p className="text-sm text-gray-600">Mon, TBA</p>
              </div>
              <p className="text-sm text-gray-600">
                Adult lessons cater to all skill levels, from beginners to advanced players looking to compete. Our coaching focuses on technique, strategy, and fitness, tailored to adult learners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
  
};

export default BadmintonLessonsPage;
