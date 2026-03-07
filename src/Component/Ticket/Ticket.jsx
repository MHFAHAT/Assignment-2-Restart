import React from 'react';

const Ticket = ({ ticket, setSelectedTicket, selectedTicket }) => {
    const priorityColors = {
        "HIGH PRIORITY": "text-red-500",
        "MEDIUM PRIORITY": "text-[#FEBB0C]",
        "LOW PRIORITY": "text-green-500"
    };
    return (
        <div onClick={() => {
            if (!selectedTicket.find(t => t.id === ticket.id)) {
                setSelectedTicket([...selectedTicket, ticket]);
            }
            else{
                alert("Ticket already selected");
            }
        }} className='flex flex-col p-4 shadow-md border rounded-lg bg-white h-full justify-between'>
            <div className='flex justify-between items-start mb-2'>
                <span className='font-bold text-[18px] leading-tight'>{ticket.title}</span>
                <button className={`px-3 py-1 rounded-2xl text-xs font-bold border-none  
                    ${ticket.status === 'open' ? 'bg-[#D1FAE5] text-green-700' : 'bg-[#F8F3B9] text-yellow-700'}`}>
                    {ticket.status}
                </button>
            </div>

            <div className='text-[14px] text-gray-500 mb-4 line-clamp-2'>
                {ticket.description}
            </div>

            <div className='flex justify-between items-center text-[12px] text-gray-400 font-bold'>
                <div>
                    <span>#{ticket.id}</span>
                    <span className={`ml-3 ${priorityColors[ticket.priority] || 'text-gray-500'}`}>
                        {ticket.priority}
                    </span>
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