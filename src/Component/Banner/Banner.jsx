import React from 'react'; 

const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-4 mt-10'>
            
            <div
                className='bg-gradient-to-r from-purple-600 to-purple-700 flex flex-col items-center justify-center gap-4 py-16 rounded-lg h-64 text-white'>
                <span className='text-[24px]'>In-Progress</span>
                <span className='text-[60px] font-semibold'>0</span>
            </div>

            <div className='bg-gradient-to-r from-emerald-500 to-emerald-600 flex flex-col items-center justify-center gap-4 py-16 rounded-lg h-64 text-white'>
                <span className='text-[24px]'>Resolved</span>
                <span className='text-[60px] font-semibold'>0</span>
            </div>

        </div>
    );
};

export default Banner;