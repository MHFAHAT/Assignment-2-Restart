import React, { use } from 'react';
import Ticket from './Ticket';

const CustomerTicket = ( {ticketPromise,setSelectedTicket,selectedTicket}) => {
     const ticket = use(ticketPromise);
     const data = ticket.tickets; 
    return (
       <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-6'> 
        { 
            data.map(ticket => <Ticket key={ticket.id} ticket={ticket} selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket}></Ticket>)
        }

       </div>
    );
};

export default CustomerTicket;