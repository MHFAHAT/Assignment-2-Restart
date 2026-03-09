import React, { Suspense} from 'react';
import CustomerTicket from './Ticket/CustomerTicket';
import TaskStatus from './Status/TaskStatus';
import ResolveStatus from './Status/resolveStatus';

const Tickets= async()=>{
    const response = await fetch('/ticket.json');
    return response.json();
}

const ticketPromise = Tickets();

const Task = ({setSelectedTicket,selectedTicket,handleComplete,resolvedTicket}) => { 
    
    return (
        <div className='max-w-350 mx-auto mt-10 grid grid-cols-1 lg:grid-cols-6 gap-6'>
            <div className='lg:col-span-4'>
                <span className='text-2xl font-semibold'>Customer Ticket</span>
                <Suspense fallback={<div>Loading...</div>} >
                <CustomerTicket setSelectedTicket={setSelectedTicket} selectedTicket={selectedTicket} ticketPromise ={ticketPromise} />
                </Suspense>
            </div>
            <div className='lg:col-span-2 flex flex-col gap-4'>
                <TaskStatus selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket}
                handleComplete={handleComplete}></TaskStatus>
                {/* <span className='text-2xl font-semibold'>Resolved</span> */}
                <ResolveStatus resolvedTicket={resolvedTicket}  ></ResolveStatus>
            </div>
        </div>
    );
};

export default Task;