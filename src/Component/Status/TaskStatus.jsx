import React from 'react';
import IndiTask from './IndiTask';  
const TaskStatus = ({setSelectedTicket,selectedTicket,handleComplete}) => {
    return (
        <div className='w-full flex flex-col gap-4 mb-7 '>
            <span className='text-2xl font-semibold'>Task Status</span>
            {
                selectedTicket.length>0? ( 
                selectedTicket.map((ticket, index) => (
                    <IndiTask 
                        key={ticket.id || index} 
                        ticket={ticket} 
                        setSelectedTicket={setSelectedTicket}
                        handleComplete={handleComplete} 
                    />
                ))
                ):(<span className='text-gray-500'>No task selected</span>
                )
            }
        </div>
    );
};

export default TaskStatus;