import NavbarHome from '@/components/Navbar/NavbarHome';
import { MapPin, Pencil, Info } from 'lucide-react';
import Card from '@/components/CustomCard/Card';
import React, { useState } from 'react';
import CardSite from '@/components/CustomCard/CardSite';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import FollowButton from '@/components/FollowButton/FollowButton';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [location, setLocation] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isFollowing1, setIsFollowing1] = useState(true);
  const [isFollowing2, setIsFollowing2] = useState(false);
  const [isFollowing3, setIsFollowing3] = useState(false);
  const [isFollowing4, setIsFollowing4] = useState(false);

  // const onToggle = () => {
  //   setIsFollowing1((prevState) => !prevState);
  // }

  const onToggle = (setter) => {
    setter((prevState) => !prevState);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue('');
  };



  return (
    <div className='mb-20 w-full'>
      <div className="bg-[url('/home/hero.png')] h-[236px] md:h-[440px] w-full bg-cover bg-no-repeat">
        <div className='container mx-auto pt-[140px] md:pt-[280px] md:pl-[200px]'>
          <h1 className='font-semibold text-white text-4xl'>Computer Engineering</h1>
          <span className='text-white text-lg'>142,765 Computer Engineers follow this</span>
        </div>
      </div>

      <NavbarHome />
      <div className='flex flex-col lg:flex-row lg:justify-between'>

        <div className='flex flex-col md:gap-4 md:p-4 xl:pl-[200px]'>
          <Card
            title="What if famous brands had regular fonts? Meet RegulaBrands!"
            header="✍️ Article"
            description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
            authorName="Sarthak Kamra"
            authorImage="/home/per1.png"
            views="1.4k"
            imageUrl="/home/card1.png"
          />

          <Card
            title="Tax Benefits for Investment under National Pension Scheme launched by Government"
            header="🔬️ Education"
            description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
            authorName="Sarah West"
            authorImage="/home/per2.png"
            views="1.4k"
            imageUrl="/home/card2.png"
          />

          <CardSite />
        </div>


        <div className='px-4 xl:pr-[200px] lg:w-1/3'>

          {location ? (
            <div className='flex gap-8 items-center'>
              <div className='flex gap-2 w-full'>
                <MapPin />
                <p>Noida, India</p>
              </div>
              <div>
                <Button variant="outline" className="border-none"><Pencil /></Button>
              </div>
            </div>
          ) : (
            <div className='flex items-center'>
              <Button className="border-b-2 border-x-0 border-t-0 rounded-none" variant="outline">
                <MapPin />
              </Button>
              <Input
                className="border-b-2 border-x-0 border-t-0 rounded-none"
                type="text" placeholder="Enter your location"
                value={inputValue}
                onChange={handleChange}
              />
              <Button
                className="border-b-2 border-x-0 border-t-0 rounded-none"
                variant="outline"
                onClick={handleClear}
              >
                <img src='/home/cross.png' alt='cross' />
              </Button>
            </div>
          )}


          <div className='pb-4'>
            <hr />
          </div>

          <div className='w-full text-xs flex gap-2 items-center pb-12'>
            <Info />
            <p className='p-2 text-md text-justify'>
              Your location will help us serve better and extend a personalised experience.
            </p>
          </div>

          {isLoggedIn ? (
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-2 pb-4 text-md '>
                <img src='/home/like.png' alt='like' />
                <p className='uppercase text-lg'>Recommended groups</p>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <img src='/home/leisure.png' alt='leisure' />
                  <p>Leisure</p>
                </div>
                {/* {!isFollowing1 ? (
                  <Button onClick={onToggle} variant="secondary" size="sm" className="hover:bg-gray-400 rounded-full">
                    Follow
                  </Button>
                ) : (<Button onClick={onToggle} className="rounded-full" size="sm"> Followed</Button>)} */}
                <FollowButton isFollowing={isFollowing1} onToggle={() => onToggle(setIsFollowing1)} />


              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <img src='/home/activism.png' alt='leisure' />
                  <p>Activism</p>
                </div>
                {/* {!isFollowing2 ? (
                  <Button variant="secondary" size="sm" className="hover:bg-gray-400 rounded-full">
                    Follow
                  </Button>
                ) : (<Button className="rounded-full" size="sm"> Followed</Button>)
                } */}
                <FollowButton isFollowing={isFollowing2} onToggle={() => onToggle(setIsFollowing2)} />

              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <img src='/home/mba.png' alt='leisure' />
                  <p className='text-base'>MBA</p>
                </div>
                {/* {!isFollowing3 ? (
                  <Button variant="secondary" size="sm" className="hover:bg-gray-400 rounded-full">
                    Follow
                  </Button>
                ) : (<Button className="rounded-full" size="sm"> Followed</Button>)
                } */}
                <FollowButton isFollowing={isFollowing3} onToggle={() => onToggle(setIsFollowing3)} />

              </div>


              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <img src='/home/phil.png' alt='leisure' />
                  <p className='text-base'>Philosophy</p>
                </div>
                {/* {!isFollowing4 ? (
                  <Button variant="secondary" size="sm" className="hover:bg-gray-400 rounded-full">
                    Follow
                  </Button>
                ) : (<Button className="rounded-full" size="sm"> Followed</Button>)
                } */}
                <FollowButton isFollowing={isFollowing4} onToggle={() => onToggle(setIsFollowing4)} />

              </div>
            </div>
          ) : <></>}


        </div>



      </div>

    </div>
  )
}

export default Home
