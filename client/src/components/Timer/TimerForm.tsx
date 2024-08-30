import React, { useState } from 'react';
import axios from 'axios';
import './Timer.css';

const TimerForm: React.FC = () => {
  const [time, setTime] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/timer/submit-reaction-time',
        { time },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log('Time submitted successfully');
    } catch (error) {
      console.log(error, 'Submission failed');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-title">Submit Reaction Time</h2>
      <input
        type="number"
        placeholder="Time in ms"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
        required
      />
      <button className="form-button" type="submit">Submit</button>
    </form>
  );
};

export default TimerForm;
