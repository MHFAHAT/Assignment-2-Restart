import React from 'react';

const Ticket = ({ ticket }) => {
    return ( 
        <div className='flex flex-col p-4 shadow-md border rounded-lg bg-white h-full justify-between'>
            <div className='flex justify-between items-start mb-2'>
                <span className='font-bold text-[18px] leading-tight'>{ticket.title}</span>
                <button className='badge badge-success bg-green-100 text-green-700 border-none px-3 py-1 rounded-full text-xs font-bold'>
                    {ticket.status}
                </button>
            </div>

            <div className='text-[14px] text-gray-500 mb-4 line-clamp-2'>
                {ticket.description}
            </div>

            <div className='flex justify-between items-center text-[12px] text-gray-400 font-bold'>
                <div>
                    <span>#{ticket.id}</span>
                    <span className='ml-3 text-red-500'>{ticket.priority}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{ticket.customer}</span>
                    <span>📅 {ticket.createdAt}</span>
                </div>
            </div>
        </div>
    );
};

export default Ticket;