import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Timer.css';

interface Timer {
  _id: string;
  time: number;
}

const TimerList: React.FC = () => {
  const [times, setTimes] = useState<Timer[]>([]);

  useEffect(() => {
    const fetchTimes = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/timer/get-reaction-times/YOUR_USER_ID', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTimes(res.data);

      } catch (error) {
        console.log(error, 'Failed to fetch times');
      }
    };
    fetchTimes();
  }, []);

  return (
    <div className="list-container">
      <h2 className="list-title">Reaction Times</h2>
      <ul className="list">
        {times.map((time) => (
          <li className="list-item" key={time._id}>{time.time} ms</li>
        ))}
      </ul>
    </div>
  );
};

export default TimerList;
