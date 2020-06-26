import React, {useState, useEffect} from 'react';
import { DateTime } from 'luxon';
import { Spinner } from 'reactstrap';

import './App.css';

const spinner = () => {
  return <Spinner color="success" />
}

const url = 'https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=18/11/2020&dateTo=12/12/2020&partner=picky&v=3'
function App() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFlight =  async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false)
    
    console.log(data.data[0].aTime);

    setFlights(data.data)
  }

  useEffect(() => fetchFlight(), []);




  return (
    <>
    <h1>KIWI</h1>
    {loading ? <Spinner /> : null}
    {(flights && flights.length > 0) ? flights.map((flight) => {
        return (<div>
          <h3>From: {flight.cityFrom}</h3>
          <h3>{flight.cityCodeFrom}</h3>
          <h3>Time: {DateTime.fromMillis(flight.dTime * 1000).toFormat('hh:mm')}</h3>

          
          <h3>To: {flight.cityTo}</h3>
          <h3>{flight.cityCodeTo}</h3>
          <h3>Time: {DateTime.fromMillis(flight.aTime * 1000).toFormat('hh:mm')}</h3>

         
          <h3>Price: £{flight.price}</h3>
       </div>)
    }) : (<p>no flights now</p>)}

  </>
  );
}

export default App;
