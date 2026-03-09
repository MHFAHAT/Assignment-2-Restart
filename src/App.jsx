import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import Task from './Component/Task'
import { useState } from 'react';
import Footer from './Component/Footer';
import { ToastContainer,toast } from 'react-toastify';

function App() {
  const [selectedTicket, setSelectedTicket] = useState([]);
  const [resolvedTicket, setResolvedTicket] = useState([]);

  const handleComplete = (ticketToResolve) => {
    setSelectedTicket(prev => prev.filter(t => t.id !== ticketToResolve.id));
    setResolvedTicket(prev => [...prev, ticketToResolve]);
    toast("Ticket marked as resolved");
  }; 
  console.log(resolvedTicket);
  return (
    <>
      <Navbar></Navbar>
      <Banner selectedTicket={selectedTicket} resolvedTicket={resolvedTicket}></Banner>
      <Task selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket} 
      handleComplete={handleComplete} resolvedTicket={resolvedTicket}/>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
