import React from 'react';
import IndiResolve from './IndiResolve';

const ResolveStatus = ({resolvedTicket}) => {
    return (
       <div className='w-full flex flex-col gap-4 '>
            <span className='text-2xl font-semibold'>Resolved Tasks</span>
            {
                resolvedTicket.length>0? (
                resolvedTicket.map((ticket, index) => (
                    <IndiResolve
                        key={ticket.id || index} 
                        ticket={ticket}  
                    />
                ))
                ):(<span className='text-gray-500'>No resolved tasks</span>)
            }
        </div>
    );
};

export default ResolveStatus;