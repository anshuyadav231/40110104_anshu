import React, { useEffect, useState } from 'react';
import { getAllTrains } from '../api';

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const allTrains = await getAllTrains();
        setTrains(allTrains);
      } catch (error) {
        console.error('Error fetching trains:', error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h2>All Trains</h2>
      {trains.map((train) => (
        <div key={train.id}>
          <h3>{train.name}</h3>
          <p>Departure Time: {train.departureTime}</p>
          <p>Price: {train.price}</p>
          <p>Seat Availability: {train.seatAvailability}</p>
        </div>
      ))}
    </div>
  );
};

export default TrainList;
