import React from 'react';
import CustomCursor from '../components/CustomCursor';

const NavPage = () => {
  return (
    <>
      <CustomCursor />
      <main className='container mx-auto px-2 md:px-0'>
        <div className='uppercase text-6x1 whome flex justify-center text-center mb-4'>
          Site Welcome
        </div>

        <div className='flex justify-between mb-5'>
          <div>
            <a href='about className=uppercase'>about</a>
          </div>
          <div>
            <a href='portfolio' className='uppercase'>
              portfolio
            </a>
          </div>
          <div>
            <a href='contact' className='uppercase'>
              contact
            </a>
          </div>
        </div>
        <div className='flex justify-between mb-5 p-7 bg-gray-200 w-4/5 mx-auto rounded-lg'>
          <div className='w-3/5'>fake content here</div>
          <div>
            <button class='bg-blue-500 text-white font-bold py-2 px-4 rounded'>
              call to action
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default NavPage;
