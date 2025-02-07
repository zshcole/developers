'use client';
import { useState } from 'react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('TRENDING');
  return (
    <div className='bg-white'>
      {/* Hero Grid Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-1 mb-1'>
        <div className='relative h-[50vh] md:h-[70vh] bg-gray-100'>
          <div className='absolute bottom-6 left-6 text-black'>
            <h2 className='text-xl md:text-2xl font-semibold mb-1'>Featured Developer</h2>
            <p className='text-base md:text-lg'>Andrew Rivera - Full Stack Engineer</p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-1'>
          <div className='relative h-[25vh] md:h-[35vh] bg-gray-200'>
            <div className='absolute bottom-4 left-6 text-black'>
              <p className='text-sm font-medium'>Latest Projects</p>
              <p className='text-xs'>React Native Apps</p>
            </div>
          </div>
          <div className='relative h-[25vh] md:h-[35vh] bg-gray-300'>
            <div className='absolute bottom-4 left-6 text-black'>
              <p className='text-sm font-medium'>Industry News</p>
              <p className='text-xs'>Tech Trends 2025</p>
            </div>
          </div>
          <div className='relative h-[25vh] md:h-[35vh] bg-gray-200'>
            <div className='absolute bottom-4 left-6 text-black'>
              <p className='text-sm font-medium'>Job Opportunities</p>
              <p className='text-xs'>Senior Positions</p>
            </div>
          </div>
          <div className='relative h-[25vh] md:h-[35vh] bg-gray-300'>
            <div className='absolute bottom-4 left-6 text-black'>
              <p className='text-sm font-medium'>Learning Paths</p>
              <p className='text-xs'>AI Engineering</p>
            </div>
          </div>
        </div>
      </div>

      {/* Membership CTA */}
      <div className='bg-black text-white py-12 md:py-16 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-2xl md:text-4xl font-light mb-4 md:mb-6'>
            Are you ready to take your development career to the next level?
          </h1>
          <p className='text-base md:text-xl mb-6 md:mb-8 font-light'>
            Developers.com membership gives you the inspiration, the access, and the tools to uncover
            the many exciting opportunities the industry has to offer. Join our community today.
          </p>
          <button className='bg-white text-black px-6 md:px-8 py-3 hover:bg-gray'>
            JOIN NOW
          </button>
        </div>
      </div>
      {/* Category Navigation*/}
      <div className='border-b overflow-x-auto'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex space-x-4 md:space-x-8 py-4 px-4 min-w-max'>
            {['TRENDING', 'LATEST', 'MOST VIEWED', 'FEATURED', 'TOP RATED'].map((category)=>(
              <button 
              key={category}
              onClick={() => setActiveCategory(category.toLowerCase())}
              className={`text-xs md:text-sm tracking-wider ${
                activeCategory === category.toLowerCase() ? 'font-semibold text-black' : 'text-gray-500'
              }`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Developer Grid */}
      <div className='max-w-7xl mx-auto px-2 py-4 md:py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8'>
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className='bg-gray-100 rounded-md'>
              <div className='h-[25vh] bg-gray-200 rounded-t-md'></div>
              <div className='p-4'>
                <h3 className='text-sm md:text-base font-semibold'>Andrew Rivera</h3>
                <p className='text-xs md:text-sm'>Full Stack Engineer</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className='text-xs px-2 py-1 bg-gray-100'>Python</span>
                  <span className='text-xs px-2 py-1 bg-gray-100'>Django</span>
                  <span className='text-xs px-2 py-1 bg-gray-100'>AWS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Industry News */}
      <div className='bg-gray-50 py-12 md:py-16'>
          <div className='max-w-6xl mx-auto px-4'>
            <h2 className='text-xl md:text-2xl font-semibold mb-4 md:mb-6'>
              Industry News
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {[1,2,3,4].map((i) => (
                <div key={i} className='bg-white rounded-md'>
                  <div className='h-[25vh] bg-gray-200 rounded-t-md'></div>
                  <div className='p-4'>
                    <h3 className='text-sm md:text-base font-semibold'>Tech Trends 2025</h3>
                    <p className='text-xs md:text-sm'>The future of technology is here.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
      {/* Newsletter Signup */}
      <div className='border-t'>
        <div className='max-w-6xl mx-auto px-4 py-12 md:py-16'>
            <div className='flex flex-col md:flex-row items-center justify-between md:items-center gap-6 md:gap-0'>
              <div>
                <h2 className='text-lg md:text-xl font-light mb-2'>Stay Informed</h2>
                <p className='text-gray=600'>Sign up for our weekly tech newsletter</p>
              </div>
              <div className='flex flex-col sm:flex-row gap-4 w-full md:w-auto'>
                <input 
                  type='email' 
                  placeholder='Enter your email address' 
                  className='w-full sm:w-auto px-4 py-2 border rounded-md bg-gray-100 focus:ring-2 focus:ring-gray-500 focus:border-transparent placeholder:text-gray-400 transition-all'
                />
                <button className='bg-black text-white px-6 py-3 hover:bg-gray-800'>
                  SUBSCRIBE
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
