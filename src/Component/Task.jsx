import React, { Suspense } from 'react';
import CustomerTicket from './Ticket/CustomerTicket';

const Tickets= async()=>{
    const response = await fetch('./public/ticket.json');
    return response.json();
}

const ticketPromise = Tickets();
const Task = () => {
    return (
        <div className='max-w-350 mx-auto mt-10 grid grid-cols-1 lg:grid-cols-6 gap-6'>
            <div className='lg:col-span-4'>
                <span className='text-2xl font-semibold'>Customer Ticket</span>
                <Suspense fallback={<div>Loading...</div>} >
                <CustomerTicket ticketPromise ={ticketPromise} />
                </Suspense>
            </div>
            <div className='lg:col-span-2'>
                <span className='text-2xl font-semibold'>Agent Ticket</span>
            </div>
        </div>
    );
};

export default Task;