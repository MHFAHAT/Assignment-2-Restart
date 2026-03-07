import React from 'react';

const IndiResolve = ({ticket}) => {
    return (
        <div className='border p-4 rounded-2xl bg-[#E0E7FF]'>
            <span>{ticket.title} Resolved</span>
        </div>
    );
};

export default IndiResolve;