import React, { use } from 'react';
import Ticket from './Ticket';

const CustomerTicket = ( {ticketPromise}) => {
     const ticket = use(ticketPromise);
     const data = ticket.tickets;
    console.log(data); 
    return (
       <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'> 
        { 
            data.map(ticket => <Ticket key={ticket.id} ticket={ticket}></Ticket>)
        }

       </div>
    );
};

export default CustomerTicket;