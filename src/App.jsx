import React, {useState, useEffect} from 'react';
import './App.css';

const url = 'https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=18/11/2020&dateTo=12/12/2020&partner=picky&v=3'
function App() {
  const [flights, setFlights] = useState([]);

  const fetchFlight =  async () => {

    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data);
    setFlights(data.data)
  }

  useEffect(() => fetchFlight(), []);




  return (
    <>
    <h1>KIWI</h1>

    {(flights && flights.length > 0) ? flights.map((flight) => {
        return (<div>
          <h3>{flight.cityFrom}</h3>
          <h3>{flight.cityTo}</h3>
       </div>)
    }) : (<p>no flights now</p>)}

  </>
  );
}

export default App;
