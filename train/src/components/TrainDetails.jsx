import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTrainById } from '../api';

const TrainDetails = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchTrain = async () => {
      try {
        const selectedTrain = await getTrainById(trainId);
        setTrain(selectedTrain);
      } catch (error) {
        console.error('Error fetching train:', error);
      }
    };

    fetchTrain();
  }, [trainId]);

  if (!train) {
    return <p>Loading train details...</p>;
  }

  return (
    <div>
      <h2>{train.name}</h2>
      <p>Departure Time: {train.departureTime}</p>
      <p>Price: {train.price}</p>
      <p>Seat Availability: {train.seatAvailability}</p>
    </div>
  );
};

export default TrainDetails;
