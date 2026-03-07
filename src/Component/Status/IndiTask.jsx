import React from 'react';

const IndiTask = ({ticket,handleComplete}) => {
   
    return (
        <div className='border rounded-lg p-3'>
            <div className='block text-lg font-medium mb-3'><a> {ticket.title}</a></div>
            <button className='w-full text-white bg-green-600 hover:bg-green-700 py-2 rounded-md font-semibold transition-colors' onClick={() => handleComplete(ticket)}>Complete</button>
        </div>
    );
};

export default IndiTask;